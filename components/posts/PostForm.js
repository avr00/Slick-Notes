import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";
import { MaterialButton, ButtonText } from "../styles/styles";

const PostForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (props.update) {
      setTitle(props.title);
      setBody(props.body);
    }
  }, []);
  const submitForm = () => {
    props.onSubmit({
      title,
      body
    });
  };
  return (
    <Form>
      <Item floatingLabel>
        <Label style={{ color: "white" }}>Title</Label>
        <Input
          style={{ color: "white" }}
          onChangeText={value => setTitle(value)}
          value={title}
        />
      </Item>

      <Item floatingLabel>
        <Label style={{ color: "white" }}>Body</Label>
        <Input
          style={{ color: "white", textAlignVertical: "top", height: 300 }}
          multiline
          onChangeText={value => setBody(value)}
          value={body}
        />
      </Item>

      <MaterialButton onPress={submitForm}>
        <ButtonText>Save</ButtonText>
      </MaterialButton>
    </Form>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 400,
    textAlignVertical: "top"
  }
});

export default PostForm;
