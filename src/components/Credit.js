import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Credit extends Component{
render()
{

    let creditList =[];

    for(let i in this.props.credit)
    {
        creditList.push( <div>ID: {this.props.credit[i].id}</div>)
        creditList.push(<div>Amount: {this.props.credit[i].amount}</div>)
        creditList.push(<div>Date: {this.props.credit[i].date}</div>)
        creditList.push(<div>Description: {this.props.credit[i].description}</div>)
        creditList.push(<br/>)
        creditList.push(<br/>)
        

    }
    return(
        <div>
        <h1>Credit</h1>
        <Link to ="/">Home</Link>
         {creditList}
         <h1>AccountBalance</h1>
         {this.props.account}
        </div>
    )
}
}

export default Credit;