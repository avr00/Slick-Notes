import React, { useEffect } from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Fab, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import styled from "styled-components";

import { NormalText } from "../styles/styles";

const PostContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #272727;
  padding: 20px;
`;

function Post(props) {
  const { loading, error, data } = useQuery(POST, {
    variables: { id: props.navigation.state.params.id }
  });

  useEffect(() => {
    updateTitle();
  }, [data]);

  const updateTitle = () => {
    if (data.Post) {
      props.navigation.setParams({ title: data.Post.title });
    }
  };

  const editPost = () => {
    props.navigation.navigate("UpdatePost", {
      post: data
    });
  };

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>`Error! ${error}`</Text>;
  return (
    <PostContainer>
      <NormalText>{data.Post.body}</NormalText>
      <Fab onPress={editPost} style={styles.updatePost}>
        <Icon name="create" />
      </Fab>
    </PostContainer>
  );
}

export default withNavigation(Post);

const styles = StyleSheet.create({
  updatePost: {
    backgroundColor: "#82D8D8"
  }
});

const POST = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;
