import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

const AuthLoadingScreen = props => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    isAuth();
  }, []);

  const isAuth = async () => {
    props.navigation.navigate("Auth");
    // props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
