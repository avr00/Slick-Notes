import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, Body, Right, Icon } from "native-base";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../graphql/queries";

const Posts = props => {
  const { loading, error, data } = useQuery(USER);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error :(</Text>;
  console.log(data);

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
                <Text>{item.title}</Text>
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
