import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Fab, Icon } from "native-base";

import navigationStyles from "./styles/navigationStyles";
import Posts from "./components/posts/Posts";
import NewPost from "./components/posts/NewPost";
import Post from "./components/posts/Post";

function Home(props) {
  const goToPost = () => {
    props.navigation.navigate("Post");
  };
  const goToNewPost = () => {
    props.navigation.navigate("NewPost");
  };
  return (
    <View style={styles.container}>
      <Posts navigation={props.navigation} />
      <Fab onPress={goToNewPost} style={styles.newPost}>
        <Icon name="add" />
      </Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  newPost: {
    backgroundColor: "#82D8D8"
  },
  newPostText: {
    fontSize: 20,
    textAlign: "center"
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navigationStyles("Home")
  },
  Post: {
    screen: Post,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: "red"
      },
      headerBackTitleStyle: {
        color: "white"
      },
      headerTintColor: "white"
    })
  },
  NewPost: {
    screen: NewPost,
    navigationOptions: navigationStyles("Create New Post")
  }
});

export default createAppContainer(AppNavigator);
