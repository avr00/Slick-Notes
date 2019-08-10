import React, { useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import styled from "styled-components";
import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

const MaterialButton = styled.TouchableHighlight`
  align-items: center;
  background-color: #6202ee;
  padding: 15px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

const Login = props => {
  const [register, setRegister] = useState(true);

  return (
    <View style={styles.container}>
      {/* {register ? <CreateUser /> : <LoginUser />}
      <Button
        title={register ? "Login" : "Create Account"}
        onPress={() => setRegister(!register)}
      /> */}
      <Image
        style={{ width: 150, height: 100, alignSelf: "center" }}
        source={require("../../assets/logotype.png")}
      />
      <MaterialButton onPress={() => props.navigation.navigate("SignIn")}>
        <ButtonText>Login</ButtonText>
      </MaterialButton>
      <MaterialButton onPress={() => props.navigation.navigate("SignUp")}>
        <ButtonText>Register</ButtonText>
      </MaterialButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#272727",
    padding: 20
  }
});

export default Login;
