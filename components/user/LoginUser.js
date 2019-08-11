import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";

import { TitleText, Container } from "../styles/styles";
import UserForm from "./UserForm";
import { signIn } from "../../LoginUtils";

const LoginUser = props => {
  const [signInUserMutation] = useMutation(SIGN_IN_USER);

  const loginUser = async ({ email, password }) => {
    try {
      const signInResponse = await signInUserMutation({
        variables: { email, password }
      });
      await signIn(signInResponse.data.signinUser.token);
      props.navigation.navigate("App");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TitleText>Login</TitleText>
      <UserForm
        onSubmit={loginUser}
        btnTitle={props.navigation.state.params.btnTitle}
      />
    </Container>
  );
};

export default withNavigation(LoginUser);

const SIGN_IN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;
