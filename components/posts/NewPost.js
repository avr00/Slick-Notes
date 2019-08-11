import React from "react";
import { ActivityIndicator } from "react-native";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

import PostForm from "./PostForm";
import { USER } from "../../graphql/queries";
import { UpdateCreatePostContainer } from "../styles/styles";

const NewPost = props => {
  const { loading: loadingUser, error, data: userData } = useQuery(USER);

  const [createPost, { data, loading }] = useMutation(NEW_POST, {
    refetchQueries: () => [{ query: USER }]
  });

  const onSubmit = async ({ title, body }) => {
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
    <UpdateCreatePostContainer>
      <PostForm onSubmit={onSubmit} />
    </UpdateCreatePostContainer>
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
