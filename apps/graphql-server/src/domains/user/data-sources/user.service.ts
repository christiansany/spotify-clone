import DataLoader from "dataloader";
import {
  UserLoginInput,
  UserRegisterInput,
} from "../../../../__generated__/schema.generated";
import { users } from "./user.data";
import {
  UserDocument,
  UserLoginPaylaod,
  UserRegisterPaylaod,
} from "./user.types";

const createAuthToken = (user: UserDocument): string => `token::${user.id}`;
const parseAuthToken = (token: string): string => token.split("::", 2)[1];

export class UserService {
  // DataLoaders
  private userLoader = new DataLoader<string, UserDocument | null>(
    async (ids) => ids.map((id) => users.find((song) => song.id === id) || null)
  );

  // Methods
  public async me(token: string): Promise<UserDocument | null> {
    return this.userLoader.load(parseAuthToken(token));
  }

  public async register(
    input: UserRegisterInput
  ): Promise<UserRegisterPaylaod> {
    if (users.find((user) => user.username === input.username)) {
      return {
        userErrors: [
          {
            field: ["username"],
            message: "User already exists",
          },
        ],
      };
    }

    // Please never do this in any kind of production ready code
    const nextId = users.length + 1;
    const user: UserDocument = {
      id: `user:${nextId}`,
      username: input.username,
      password: input.password,
    };
    users.push(user);

    return {
      userErrors: [],
      user: user,
      token: createAuthToken(user),
    };
  }

  public async login(input: UserLoginInput): Promise<UserLoginPaylaod> {
    const user = users.find(
      (user) =>
        user.username === input.username && user.password === input.password
    );

    if (!user) {
      return {
        userErrors: [
          {
            field: [],
            message: "Invalid username or password",
          },
        ],
      };
    }

    return {
      userErrors: [],
      user: user,
      token: createAuthToken(user),
    };
  }
}
