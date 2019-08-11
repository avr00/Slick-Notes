import React from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

import PostForm from "./PostForm";
import { USER } from "../../graphql/queries";
import { UpdateCreatePostContainer } from "../styles/styles";
import LoadingScreen from "../shared/LoadingScreen";

const NewPost = props => {
  const { loading: loadingUser, error, data: userData } = useQuery(USER);

  const [updatePost, { data, loading }] = useMutation(UPDATE_POST, {
    refetchQueries: () => [{ query: USER }]
  });

  const onSubmit = async ({ title, body }) => {
    try {
      await updatePost({
        variables: {
          title,
          body,
          userId: userData.user.id,
          id: props.navigation.state.params.post.Post.id
        }
      });
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) return <LoadingScreen />;
  return (
    <UpdateCreatePostContainer>
      <PostForm
        onSubmit={onSubmit}
        update={true}
        title={props.navigation.state.params.post.Post.title}
        body={props.navigation.state.params.post.Post.body}
      />
    </UpdateCreatePostContainer>
  );
};

const UPDATE_POST = gql`
  mutation updatePost($title: String!, $body: String, $userId: ID!, $id: ID!) {
    updatePost(title: $title, body: $body, userId: $userId, id: $id) {
      id
      createdAt
      title
      body
    }
  }
`;

export default NewPost;
