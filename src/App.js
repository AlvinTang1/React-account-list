import React,{Component} from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      AccountDetails:[
        {
          accNo:101,
          accName:'a',
          accType:'personal',
          accBalance:200,
          accIsActive:true
        },
        {
          accNo:102,
          accName:'b',
          accType:'personal',
          accBalance:300,
          accIsActive:true
        },
        {
          accNo:103,
          accName:'c',
          accType:'personal',
          accBalance:400,
          accIsActive:true
        },
        {
          accNo:104,
          accName:'d',
          accType:'personal',
          accBalance:500,
          accIsActive:true
        },
        {
          accNo:105,
          accName:'e',
          accType:'personal',
          accBalance:500,
          accIsActive:false
        },
        {
          accNo:106,
          accName:'f',
          accType:'personal',
          accBalance:600,
          accIsActive:true
        },
        {
          accNo:107,
          accName:'g',
          accType:'personal',
          accBalance:700,
          accIsActive:false
        },
        {
          accNo:108,
          accName:'h',
          accType:'personal',
          accBalance:800,
          accIsActive:false
        },
        {
          accNo:109,
          accName:'i',
          accType:'personal',
          accBalance:900,
          accIsActive:true
        },
        {
          accNo:110,
          accName:'j',
          accType:'personal',
          accBalance:1000,
          accIsActive:true
        }
  
      ]

    }
    
  }
  CreateAccount=()=>{
    var newAccount={};
    newAccount.accNo= document.getElementById('AccountNo').value;
    newAccount.accName=document.getElementById('AccountName').value;
    newAccount.accType=document.getElementById('AccountType').value;
    newAccount.accBalance=document.getElementById('AccountBalance').value;
    newAccount.accIsActive=true;
    var currentArray=this.state.AccountDetails;
    currentArray.push(newAccount);
    this.setState({AccountDetails:currentArray});
    document.getElementById('AccountNo').value='';
    document.getElementById('AccountName').value='';
    document.getElementById('AccountType').value='Savings';
    document.getElementById('AccountBalance').value='';

  }
 render(){
   return(
    <div class="bg-primary">
      <h1 class="text-center">Create New Account</h1>
      <span>Account Number: </span><input class="bg-warning" type="text" placeholder="Account Number" id="AccountNo"/>
      <span>Account Name: </span><input type="text" class="bg-warning" placeholder="Account Name" id="AccountName"/>
      <span>Account Type: </span>
      <select id="AccountType" class="bg-warning">
        <option value="Savings">Savings</option>
        <option value="Current">Current</option>
        <option value="Loan">Loan</option>
      </select>
      <span>Account Balance: </span><input class="bg-warning" type="number" min="500" max="25000" placeholder="Account Balance" id="AccountBalance"/>
      <button onClick={this.CreateAccount} className="float-right mr-4 mb-3 btn btn-danger">Create Account!</button>
    <table className="table table-hover table-dark">
    <thead>
        <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Account Balance</th>
            <th>Account Active?</th>
        </tr>
    </thead>
    <tbody>
        {this.state.AccountDetails.map((account,i) => {
            return (
                <tr>
                    <td>{account.accNo}</td>
                    <td>{account.accName}</td>
                    <td>{account.accType}</td>
                    <td>{account.accBalance}</td>
                    <td>{account.accIsActive ? 'yes' : 'no'}</td>
                    <td>{' '}<button className="btn btn-primary"> Add </button>{' '}</td>
                    <td>{' '}<button className="btn btn-warning"> Delete </button>{' '}</td>
                
                </tr>
            )
        })}
    </tbody>
</table>
</div>
   )
 }
}

export default App;
