import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import UsersProfile from './components/UsersProfile';
import LogIn from './components/Login';
import Debit from './components/Debit';
import Credit from './components/Credit';

//account balance should be my Debits subtracted from my Credits

class App extends Component {
constructor(){
  super()
  this.state ={
    accountBalance: 0,
    debit: [],
    credit: [],

    currentUser:{
    userName: 'Victor_reeeeeee',  
    memberSince: '09/09/99'
  }

  }
}
 balance()
 {
  
   fetch("https://moj-api.herokuapp.com/debits")
   .then(res =>res.json())
   .then(result => this.setState({debit: result}))

   console.log(this.state.debit)

   fetch("https://moj-api.herokuapp.com/credits")
  .then(res => res.json())
  .then(result => this.setState({credit: result}))
  console.log(this.state.credit)
 }

  mockLogIn = (logInInfo) => {
  const newUser = {...this.state.currentUser}
  newUser.userName = logInInfo.userName
  this.setState({currentUser: newUser})
}
  render() {
    const HomeComponent = () => (<Home accountBalance = {this.state.accountBalance} />)
    const UserProfileComponent = () => (<UsersProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>)
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    
    return (

      <Router>
          <Route exact path = "/" render={HomeComponent} />
          <Route exact path = "/UsersProfile" render = {UserProfileComponent} />
          <Route exact path = "/login" render = {LogInComponent} />
          <Route exact path = "/Debit" component = {Debit}/>
          <Route exact path = "/Credit" component = {Credit}/>
      </Router>
    );
  }
}

export default App;