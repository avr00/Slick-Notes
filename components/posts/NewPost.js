import React from "react";
import { View, ActivityIndicator } from "react-native";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import { POSTS } from "./Posts";
import PostForm from "./PostForm";

const NewPost = props => {
  const [createPost, { data, loading }] = useMutation(NEW_POST, {
    refetchQueries: () => [{ query: POSTS }]
  });
  const onSubmit = async ({ title, body }) => {
    console.log("TITLE AND BODY", title, body);
    try {
      await createPost({ variables: { title, body } });
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) return <ActivityIndicator />;
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
