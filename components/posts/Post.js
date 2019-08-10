import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Fab, Icon } from "native-base";
import { withNavigation } from "react-navigation";

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
    <View style={styles.container}>
      <Text style={styles.bodyText}>{data.Post.body}</Text>
      <Fab onPress={editPost} style={styles.updatePost}>
        <Icon name="create" />
      </Fab>
    </View>
  );
}

export default withNavigation(Post);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  bodyText: {
    fontSize: 16
  },
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
