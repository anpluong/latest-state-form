import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
