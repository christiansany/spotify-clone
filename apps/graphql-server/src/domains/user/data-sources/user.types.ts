import { UserError } from "../../../../__generated__/schema.generated";

export interface UserDocument {
  id: string;
  username: string;
  password: string;
}

export interface UserRegisterPaylaod {
  userErrors: UserError[];
  user?: UserDocument;
  token?: string;
}

export interface UserLoginPaylaod {
  userErrors: UserError[];
  user?: UserDocument;
  token?: string;
}
