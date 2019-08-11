import React from "react";
import { Container } from "../styles/styles";
import { Spinner } from "native-base";

const LoadingScreen = () => {
  return (
    <Container>
      <Spinner color="blue" />
    </Container>
  );
};

export default LoadingScreen;
