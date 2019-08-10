import React from "react";
import { View, Text } from "react-native";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";

import UserForm from "./UserForm";
import { signIn } from "../../LoginUtils";

const LoginUser = props => {
  const [signInUserMutation] = useMutation(SIGN_IN_USER);
  const client = useApolloClient();

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
    <View>
      <Text>Login</Text>
      <UserForm onSubmit={loginUser} type="Login" />
    </View>
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
