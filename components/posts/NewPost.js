import React from "react";
import { View, Text } from "react-native";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import PostForm from "./PostForm";

const NewPost = () => {
  const [createPost, { data }] = useMutation(NEW_POST);
  const onSubmit = async ({ title, body }) => {
    console.log("TITLE AND BODY", title, body);
    try {
      await createPost({ variables: { title, body } });
      console.log("data", data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View>
      <PostForm onSubmit={onSubmit} />
    </View>
  );
};

const NEW_POST = gql`
  mutation newPost($title: String!, $body: String) {
    createPost(title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

export default NewPost;
