import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

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
    <View>
      <TextInput onChangeText={value => setTitle(value)} value={title} />
      <TextInput onChangeText={value => setBody(value)} value={body} />
      <Button title="Save Post" onPress={submitForm} />
    </View>
  );
};

export default PostForm;
