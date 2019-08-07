import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Navigator from "./Navigator";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjz0vkrh238ui0138ioeff5yo"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
}

export default App;
