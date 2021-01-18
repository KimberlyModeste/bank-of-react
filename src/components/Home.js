import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Home extends Component{
render() {

return (
    <div>
        
    
       <h1>Bank of React</h1>
       <AccountBalance accountBalance = {this.props.accountBalance} />
      <br/>
      <Link to ="/UsersProfile">Users Profile</Link>
      <br/>
      <Link to ="/Debit">Debit</Link>
      <br/>
      <Link to ="/Credit">Credit</Link>
      
    </div>
);
}

}

export default Home;
//https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png "./pictures/Bank.jpg"