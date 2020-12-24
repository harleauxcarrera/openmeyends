import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils';

class App extends React.Component() { //turned into class component to be able to store user in state
  constructor(){
    super();

    this.state= {
    currentUser: null
  }
}

unsubscribeFromAuth = null; //used to close the auth subscription/session

 //check whether user is logged in
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
    this.setState({currentUser: user});
    console.log(user);
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route  path="/signin" component={SignIn}/>
  
        </Switch>
        </div>
    );
  }
}

export default App;
