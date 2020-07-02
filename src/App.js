import React from 'react';
import './App.css';
import {Header} from './components/Header.js';
import {Balance} from './components/Balance.js';
import {AccountSummary} from './components/AccountSummary.js'
import { TransactionHistory } from './components/TransactionHistory';

import { GlobalProvider } from './Context/GlobalState';
import { AddTransaction } from './components/AddTransaction';



function App() {
  return (
    <GlobalProvider>
    
      <Header/>
      <div className= 'container'>
         <Balance />
         <AccountSummary />
         <TransactionHistory />
         <AddTransaction />
         
      </div>
    
      </GlobalProvider>
  );
}

export default App;
