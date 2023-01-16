import { useMutation } from "@apollo/client";
import { graphql } from "../../__generated__/gql";

const UserLoginDocumentDocument = graphql(`
  mutation UserLogin($input: UserLoginInput!) {
    userLogin(input: $input) {
      userErrors {
        field
        message
      }
      user {
        id
        username
      }
      token
    }
  }
`);

function LoginForm() {
  const [login, { data, loading, error }] = useMutation(
    UserLoginDocumentDocument
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    login({
      variables: {
        input: {
          username: (formData.get("username") as string) || "",
          password: (formData.get("password") as string) || "",
        },
      },
    }).then(({ data }) => {
      // TODO: if successfull, save the token so it can be sent with every request
      // See https://www.apollographql.com/docs/react/api/link/apollo-link-context
      console.log(data);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Username
        <input type="username" name="username" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
