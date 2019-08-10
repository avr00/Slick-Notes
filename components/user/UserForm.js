import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Form, Item, Input, Label } from "native-base";
import styled from "styled-components";

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

const UserForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    props.onSubmit({ email, password });
  };

  return (
    <Form>
      <Item floatingLabel>
        <Label style={{ color: "white" }}>Email</Label>
        <Input
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </Item>
      <Item floatingLabel>
        <Label style={{ color: "white" }}>Password</Label>
        <Input
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </Item>
      <MaterialButton onPress={submitForm}>
        <ButtonText>Submit</ButtonText>
      </MaterialButton>
    </Form>
  );
};

export default UserForm;
