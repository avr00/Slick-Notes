import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

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
      <TextInput
        style={styles.title}
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <TextInput
        style={styles.body}
        onChangeText={value => setBody(value)}
        value={body}
      />
      <Button title="Save Post" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderColor: "#333",
    borderWidth: 1
  },
  body: {
    height: 400,
    borderColor: "#333",
    borderWidth: 1,
    textAlignVertical: "top"
  }
});

export default PostForm;
