import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../graphql/queries";

const AuthLoadingScreen = props => {
  const { loading, error, data } = useQuery(USER, {
    onCompleted: () => {
      console.log("COMPLETED!!");
      props.navigation.navigate(data.user ? "App" : "Auth");
    }
  });

  // Render any loading content that you like here
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
