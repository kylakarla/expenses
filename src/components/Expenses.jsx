import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpenseFilter.jsx';
import './Expenses.css';
import ExpensesList from './ExpensesList.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter=
      {filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;