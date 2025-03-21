import React, { useState, useEffect } from 'react';
import './App.css';
import Expenses from "./components/Expenses.jsx";
import NewExpense from './components/NewExpense.jsx';
import Card from './components/card.jsx';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFormLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFormLS || [];
  })
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  },[expenses]);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Card className='app'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </Card>
  );
};

export default App;