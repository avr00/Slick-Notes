import React from "react";
import { View, Text } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import UserForm from "./UserForm";

const CreateUser = () => {
  const [createUserMutation] = useMutation(CREATE_USER);
  const [signInUserMutation] = useMutation(SIGN_IN_USER);

  const createUser = async ({ email, password }) => {
    try {
      await createUserMutation({ variables: { email, password } });
      const signIn = await signInUserMutation({
        variables: { email, password }
      });
      console.log(signIn.data.signinUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <UserForm onSubmit={createUser} type="Register" />
    </View>
  );
};

export default CreateUser;

const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
  }
`;

const SIGN_IN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;
