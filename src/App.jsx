import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./redux/store"
import MainBody from './components/mainbody';
import NavBar from './components/navbar';
import Header from './components/header';
import login from './pages/login';


class RE extends Component {
  componentDidMount(){
    this.props.history.push("/login")
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
          <Route 
            component={RE}
            path="/"
            exact={true}
          />
          <MainBody>
            <Header/>
            <Route 
              path="/home"
            />
          </MainBody>
          <Route 
            component={login}
            path="/login"
            exact={true}
          />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App