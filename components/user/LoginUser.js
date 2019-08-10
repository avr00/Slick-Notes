import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";
import styled from "styled-components";

import UserForm from "./UserForm";
import { signIn } from "../../LoginUtils";

const TitleText = styled.Text`
  color: white;
  font-size: 30;
  text-align: center;
`;

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
    <View style={styles.container}>
      <TitleText>Login</TitleText>
      <UserForm onSubmit={loginUser} type="Login" />
    </View>
  );
};

export default withNavigation(LoginUser);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#272727",
    padding: 20
  }
});

const SIGN_IN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;
