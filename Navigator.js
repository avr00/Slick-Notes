import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import navigationStyles, { navStylesAuth } from "./styles/navigationStyles";
import NewPost from "./components/posts/NewPost";
import UpdatePost from "./components/posts/UpdatePost";
import Post from "./components/posts/Post";
import Welcome from "./components/user/Welcome";
import Home from "./components/home/Home";
import AuthLoadingScreen from "./components/auth/AuthLoadingScreen";
import CreateUser from "./components/user/CreateUser";
import LoginUser from "./components/user/LoginUser";

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
  },
  UpdatePost: {
    screen: UpdatePost,
    navigationOptions: navigationStyles("Create New Post")
  }
});

const AuthStack = createStackNavigator({
  Welcome: { screen: Welcome, navigationOptions: navStylesAuth },
  SignIn: { screen: LoginUser, navigationOptions: navStylesAuth },
  SignUp: { screen: CreateUser, navigationOptions: navStylesAuth }
});

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
