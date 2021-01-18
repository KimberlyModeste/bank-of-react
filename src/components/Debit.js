import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Debit extends Component{


render()
{
   let debitList =[];

    for(let i in this.props.debit)
    {
        debitList.push( <div>ID: {this.props.debit[i].id}</div>)
        debitList.push(<div>Amount: {this.props.debit[i].amount}</div>)
        debitList.push(<div>Date: {this.props.debit[i].date}</div>)
        debitList.push(<div>Description: {this.props.debit[i].description}</div>)
        debitList.push(<br/>)
        debitList.push(<br/>)
        

    }

    return(
        
        <div>
        <h1>Debits</h1>
        <Link to ="/">Home</Link>
        {debitList}
        <h1>AccountBalance</h1>
        {this.props.account}
        </div>
    )
}
}

export default Debit;