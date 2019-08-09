import React from "react";
import { View, Text } from "react-native";
import UserForm from "./UserForm";

const LoginUser = () => {
  const loginUser = () => {};

  return (
    <View>
      <Text>Login</Text>
      <UserForm onSubmit={loginUser} type="Login" />
    </View>
  );
};

export default LoginUser;
