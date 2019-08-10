import React from "react";
import { StyleSheet, Button, View, TouchableHighlight } from "react-native";
import { Fab, Icon } from "native-base";
import { useApolloClient } from "@apollo/react-hooks";

import Posts from "../posts/Posts";
import { signOut } from "../../LoginUtils";
import { MaterialButton, ButtonText, FabIcon } from "../styles/styles";

function Home(props) {
  const client = useApolloClient();
  const goToNewPost = () => {
    props.navigation.navigate("NewPost");
  };

  return (
    <View style={styles.container}>
      <Posts navigation={props.navigation} />
      <MaterialButton
        onPress={async () => {
          await signOut();
          client.resetStore();
          props.navigation.navigate("Auth");
        }}
      >
        <ButtonText>Logout</ButtonText>
      </MaterialButton>
      <Fab onPress={goToNewPost} style={styles.newPost}>
        <Icon name="add" />
      </Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#272727",
    padding: 10
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
