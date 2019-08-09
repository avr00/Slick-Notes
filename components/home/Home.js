import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Fab, Icon } from "native-base";

import Posts from "../posts/Posts";

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

export default Home;
