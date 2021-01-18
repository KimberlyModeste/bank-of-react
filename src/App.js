import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import UsersProfile from './components/UsersProfile';
import LogIn from './components/Login';
import Debit from './components/Debit';
import Credit from './components/Credit';
import './random.css'

//account balance should be my Debits subtracted from my Credits

class App extends Component {
constructor(){
  super()
  this.state ={
    accountBalance: 0,
    debit: [],
    credit: [],
    idNumber: 1,

    currentUser:{
    userName: 'Victor_reeeeeee',  
    memberSince: '09/09/99'
  }
    
  }

  let debitFetch = new XMLHttpRequest();
  debitFetch.open("GET", "https://moj-api.herokuapp.com/debits", false); 
  debitFetch.send(null);
  this.state.debit = JSON.parse(debitFetch.response)


  let creditFetch = new XMLHttpRequest();
  creditFetch.open("GET", "https://moj-api.herokuapp.com/credits", false); 
  creditFetch.send(null);
  this.state.credit = JSON.parse(creditFetch.response)

  let debitAmmount = 0;
  for(let i in this.state.debit)
  {
    debitAmmount+= this.state.debit[i].amount;
  }
  
  let creditAmmount = 0;
  for(let i in this.state.credit)
  {
    creditAmmount += this.state.credit[i].amount;
  }

  this.state.accountBalance = creditAmmount - debitAmmount
  this.state.accountBalance = (Math.round(this.state.accountBalance * 100) /100).toFixed(2)
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
    const CreditComponet = () => (<Credit credit = {this.state.credit} account = {this.state.accountBalance}/>)
    const DebitComponent = () => (<Debit debit = {this.state.debit} account = {this.state.accountBalance}/>)
    
    return (

    
      <Router>
          <Route exact path = "/" render={HomeComponent} />
          <Route exact path = "/UsersProfile" render = {UserProfileComponent} />
          <Route exact path = "/login" render = {LogInComponent} />
          <Route exact path = "/Credit" render = {CreditComponet}/>
          <Route exact path = "/Debit" render = {DebitComponent}/>
      </Router>
    );
  }
}

export default App;