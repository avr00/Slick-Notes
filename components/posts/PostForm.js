import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const PostForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitForm = () => {
    props.onSubmit({
      title,
      body
    });
    console.log(title, body, "MMM");
  };
  return (
    <Form>
      <Item floatingLabel>
        <Label>Title</Label>
        <Input onChangeText={value => setTitle(value)} value={title} />
      </Item>

      <Item floatingLabel>
        <Label>Body</Label>
        <Input
          multiline
          style={styles.body}
          onChangeText={value => setBody(value)}
          value={body}
        />
      </Item>

      <Button title="Save Post" onPress={submitForm} />
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
