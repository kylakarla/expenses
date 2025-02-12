import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses.jsx";
import NewExpense from './components/NewExpense.jsx';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      id: 'e2',
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    },
      {
      id: 'e3',
      date: new Date(2023, 9, 11),
      title: 'New shirt',
      price: 39.99
    },
    {
      id: 'e4',
      date: new Date(2025, 10, 22),
      title: 'New TV',
      price: 299.99
    }
  ]);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;