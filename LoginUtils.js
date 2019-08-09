import { AsyncStorage } from "react-native";

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  try {
    token = await AsyncStorage.getItem("AUTH_TOKEN");
    return token;
  } catch (err) {
    console.log(err);
    // saving error
  }
};

export const signIn = async newToken => {
  try {
    return await AsyncStorage.setItem("AUTH_TOKEN", newToken);
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    return await AsyncStorage.removeItem("AUTH_TOKEN");
  } catch (e) {
    console.log(err);
  }
};
