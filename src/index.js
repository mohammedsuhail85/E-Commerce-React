import { ColorModeScript, theme, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import ViewItem from './Components/ViewItem';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';

// ReactDOM.render(
//   <StrictMode>
//     <ColorModeScript />
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );

const history = createBrowserHistory();

ReactDOM.render((
  <ChakraProvider theme={theme}>
  <Navbar />
    <Router>
      <ColorModeScript />
      <Switch>

        <Route path="/users/profile/:id">
          <ViewItem />
        </Route>

        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router >

  </ChakraProvider>

), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
