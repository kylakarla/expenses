import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import './Expenses.css';

const Expenses = (props) => {
  console.log(props);

  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          data={expense}

        />
      ))}
    </div>
  );
};

export default Expenses;