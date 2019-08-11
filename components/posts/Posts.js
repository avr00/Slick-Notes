import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, Body, Right, Icon } from "native-base";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../graphql/queries";
import styled from "styled-components";
import LoadingScreen from "../shared/LoadingScreen";

export const PostsContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #272727;
  padding: 20px;
`;

export const ListText = styled.Text`
  color: white;
`;

const Posts = props => {
  const { loading, error, data } = useQuery(USER, {
    fetchPolicy: "network-only"
  });

  if (loading) return <LoadingScreen />;
  if (error) {
    console.log(error);
    return <Text>Error :(</Text>;
  }

  return (
    <View>
      <List>
        <FlatList
          data={data.user.posts}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                props.navigation.navigate("Post", {
                  id: item.id,
                  title: item.title
                })
              }
            >
              <Body>
                <ListText>{item.title}</ListText>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          )}
          keyExtractor={item => item.id}
        />
      </List>
    </View>
  );
};

export default Posts;
