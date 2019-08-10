import React, { useState } from "react";
import { Form, Item, Input, Label } from "native-base";
import { MaterialButton, ButtonText } from "../styles/styles";

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
          style={{ color: "white" }}
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </Item>
      <Item floatingLabel>
        <Label style={{ color: "white" }}>Password</Label>
        <Input
          style={{ color: "white" }}
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
