import React from "react";
import { Image } from "react-native";
import { MaterialButton, ButtonText, Container } from "../styles/styles";

const Login = props => {
  return (
    <Container>
      <Image
        style={{
          width: 150,
          height: 100,
          alignSelf: "center",
          marginBottom: "auto"
        }}
        source={require("../../assets/logotype.png")}
      />
      <MaterialButton
        onPress={() =>
          props.navigation.navigate("SignIn", { btnTitle: "Login" })
        }
      >
        <ButtonText>Login</ButtonText>
      </MaterialButton>
      <MaterialButton
        onPress={() =>
          props.navigation.navigate("SignUp", { btnTitle: "Register" })
        }
      >
        <ButtonText>Register</ButtonText>
      </MaterialButton>
    </Container>
  );
};

export default Login;
