import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { Spinner } from "native-base";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../graphql/queries";
import styled from "styled-components";

const AuthLoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #272727;
`;

const AuthLoadingScreen = props => {
  const { loading, error, data } = useQuery(USER, {
    fetchPolicy: "network-only",
    onCompleted: () => {
      props.navigation.navigate(data.user ? "App" : "Auth");
    }
  });

  // Render any loading content that you like here
  return (
    <AuthLoadingContainer>
      <StatusBar barStyle="default" />
      <Spinner color="blue" />
    </AuthLoadingContainer>
  );
};

export default AuthLoadingScreen;
