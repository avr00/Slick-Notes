import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Navigator from "./Navigator";
import { getToken } from "./LoginUtils";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjz0vkrh238ui0138ioeff5yo",
  request: async operation => {
    const token = await getToken();
    console.log(token);
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
}

export default App;
