import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";

import { TitleText, Container } from "../styles/styles";
import UserForm from "./UserForm";
import { signIn } from "../../LoginUtils";

const CreateUser = props => {
  const [createUserMutation] = useMutation(CREATE_USER);
  const [signInUserMutation] = useMutation(SIGN_IN_USER);

  const createUser = async ({ email, password }) => {
    try {
      await createUserMutation({ variables: { email, password } });
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
      <TitleText>Register</TitleText>
      <UserForm onSubmit={createUser} type="Register" />
    </Container>
  );
};



export default withNavigation(CreateUser);

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
