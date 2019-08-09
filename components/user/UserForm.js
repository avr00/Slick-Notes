import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const UserForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    props.onSubmit({ email, password });
  };

  return (
    <Form>
      <Item floatingLabel>
        <Label>Email</Label>
        <Input
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </Item>
      <Item floatingLabel>
        <Label>Password</Label>
        <Input
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </Item>
      <Button title={props.type} onPress={submitForm} />
    </Form>
  );
};

export default UserForm;
