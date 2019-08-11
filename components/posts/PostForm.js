import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Form, Item, Input, Label, Textarea } from "native-base";
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
      <Item stackedLabel>
        <Label style={{ color: "white" }}>Title</Label>
        <Input
          style={{ color: "white" }}
          onChangeText={value => setTitle(value)}
          value={title}
        />
      </Item>
      <Textarea
        style={{ color: "white" }}
        rowSpan={7}
        placeholder="Body"
        onChangeText={value => setBody(value)}
        value={body}
      />
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
