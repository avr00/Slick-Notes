import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function Post(props) {
  const { loading, error, data } = useQuery(POST, {
    variables: { id: props.navigation.state.params.id }
  });

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>`Error! ${error}`</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>{data.Post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  bodyText: {
    fontSize: 16
  }
});

export default Post;

const POST = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;
