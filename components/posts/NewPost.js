import React from "react";
import { View, Text } from "react-native";

import PostForm from "./PostForm";

const NewPost = () => {
  const onSubmit = ({ title, body }) => {
    console.log("TITLE AND BODY", title, body);
  };
  return (
    <View>
      <PostForm onSubmit={onSubmit} />
    </View>
  );
};

export default NewPost;
