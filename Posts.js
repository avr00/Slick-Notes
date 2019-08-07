import React from "react";
import { View, Text, FlatList } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Posts = props => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  console.log(data);

  return (
    <View>
      <FlatList
        data={data.allPosts}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              props.navigation.navigate("Post", {
                id: item.id
              })
            }
          >
            {item.title}
          </Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Posts;

const POSTS = gql`
  query allPosts {
    allPosts {
      id
      title
    }
  }
`;
