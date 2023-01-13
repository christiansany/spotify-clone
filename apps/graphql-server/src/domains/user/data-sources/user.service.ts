import { DataSource } from "apollo-datasource";
import DataLoader from "dataloader";
import {
  UserLoginInput,
  UserLoginPaylaod,
  UserRegisterInput,
  UserRegisterPaylaod,
} from "../../../../__generated__/schema.generated";
import { users } from "./user.data";
import { UserDocument } from "./user.types";

const createAuthToken = (user: UserDocument): string => `token::${user.id}`;
const parseAuthToken = (token: string): string => token.split("::", 2)[1];

export class UserService extends DataSource {
  private userLoader: DataLoader<string, UserDocument | null>;

  constructor() {
    super();
    this.userLoader = new DataLoader(async (ids) =>
      ids.map((id) => users.find((song) => song.id === id) || null)
    );
  }

  public async me(token: string): Promise<UserDocument | null> {
    console.log({ token });

    const userId = parseAuthToken(token);
    console.log({ userId });

    return this.userLoader.load(userId);
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
