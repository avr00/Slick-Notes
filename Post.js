import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function Post(props) {
  const { loading, error, data } = useQuery(POST, {
    variables: { id: props.navigation.state.params.id }
  });

  if (loading) return null;
  if (error) return <Text>`Error! ${error}`</Text>;
  return (
    <View>
      <Text>{props.navigation.state.params.id}</Text>
      <Text>{data.Post.title}</Text>
    </View>
  );
}

export default Post;

const POST = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
    }
  }
`;
