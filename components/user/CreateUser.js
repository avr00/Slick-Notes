import React from "react";
import { View, Text } from "react-native";
import UserForm from "./UserForm";

const CreateUser = () => {
  const createUser = () => {};

  return (
    <View>
      <Text>Login</Text>
      <UserForm onSubmit={createUser} type="Register" />
    </View>
  );
};

export default CreateUser;
