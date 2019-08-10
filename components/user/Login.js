import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

const Login = () => {
  const [register, setRegister] = useState(true);
  return (
    <View style={styles.container}>
      {register ? <CreateUser /> : <LoginUser />}
      <Button
        title={register ? "Login" : "Register"}
        onPress={() => setRegister(!register)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Login;