import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [viewForm, setViewForm] = useState(false);

    const onAddNewExpense = (newExpense) => {
        props.onAddNewExpense(newExpense);
        setViewForm(false);
    }

    const showForm = () => setViewForm(true);

    const hideForm = () => setViewForm(false);

    const addExpenseButton = <button onClick={showForm}>Add New Expense</button>

    const newExpenseContent = viewForm
        ? <ExpenseForm
            onAddNewExpense={onAddNewExpense}
            onHideForm={hideForm}
        />
        : addExpenseButton;

    return (
        <div className='new-expense'>
            {newExpenseContent}
        </div>
    )
}

export default NewExpense;