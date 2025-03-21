import React, { useRef, useState, Fragment } from 'react';
import './ExpenseForm.css';
import Error from '../UI/Error';

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);
  console.log(error);

  const TitleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = TitleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid title, amount, and date.'
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    props.onCancel();
    TitleInputRef.current.value = '';
    amountInputRef.current.value = '';
    dateInputRef.current.value = '';
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" id="title" ref={TitleInputRef} />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" id="amount" ref={amountInputRef} />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2024" max="2026-01-31" id="date" ref={dateInputRef} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;