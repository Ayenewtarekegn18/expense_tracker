import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import { GlobalState } from './Context/GlobalState';
import { Transaction } from './components/Transaction';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
<Header />
<Balance/>
<IncomeExpenses/>
<AddTransaction/>
<TransactionList/>
<TransactionList/>
   </>
  );
}

export default App;
