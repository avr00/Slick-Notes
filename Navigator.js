import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import navigationStyles from "./styles/navigationStyles";
import NewPost from "./components/posts/NewPost";
import Post from "./components/posts/Post";
import Login from "./components/user/Login";
import Home from "./components/home/Home";
import AuthLoadingScreen from "./components/auth/AuthLoadingScreen";

const AppStack = createStackNavigator({
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

const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
