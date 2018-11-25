import React from 'react'
import ReactDOM from 'react-dom'
import App from '../react/components/app'
import registerServiceWorker from "./registerServiceWorker"
import { ApolloProvider} from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { amber } from '@material-ui/core/colors'

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#f44336"
    }
  }
});


ReactDOM.render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ApolloProvider>,
  document.getElementById("app")
);

registerServiceWorker();