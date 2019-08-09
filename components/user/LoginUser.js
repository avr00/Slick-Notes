import React from "react";
import { View, Text } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import UserForm from "./UserForm";
import { signIn } from "../../LoginUtils";

const LoginUser = () => {
  const [signInUserMutation] = useMutation(SIGN_IN_USER);

  const loginUser = async ({ email, password }) => {
    try {
      const signInResponse = await signInUserMutation({
        variables: { email, password }
      });
      signIn(signInResponse.data.signinUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <UserForm onSubmit={loginUser} type="Login" />
    </View>
  );
};

const SIGN_IN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export default LoginUser;
