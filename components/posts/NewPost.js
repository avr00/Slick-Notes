import React from "react";
import { View, ActivityIndicator } from "react-native";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { POSTS } from "./Posts";
import PostForm from "./PostForm";
import { USER } from "../../graphql/queries";

const NewPost = props => {
  const { loading: loadingUser, error, data: userData } = useQuery(USER);

  const [createPost, { data, loading }] = useMutation(NEW_POST, {
    refetchQueries: () => [{ query: POSTS }]
  });
  console.log("USER DATA ", userData);

  const onSubmit = async ({ title, body }) => {
    console.log("TITLE AND BODY", title, body);
    try {
      await createPost({
        variables: { title, body, userId: userData.user.id }
      });
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
  mutation newPost($title: String!, $body: String, $userId: ID!) {
    createPost(title: $title, body: $body, userId: $userId) {
      id
      title
      body
    }
  }
`;

export default NewPost;
