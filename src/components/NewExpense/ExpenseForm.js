import { useState } from 'react';
import './ExpenseForm.css';

const initialForm = { title: '', amount: '', date: '' }

const ExpenseForm = (props) => {
    const [form, setForm] = useState(initialForm);

    // handlers
    const titleChangeHandler = (e) => {
        setForm((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        })
    }

    const amountChangeHandler = (e) => {
        setForm((prevState) => {
            return {
                ...prevState,
                amount: e.target.value
            }
        })
    }

    const dateChangeHandler = (e) => {
        setForm((prevState) => {
            return {
                ...prevState,
                date: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newExpense = {
            ...form,
            date: new Date(form.date),
            id: Math.random()
        }

        props.onAddNewExpense(newExpense);
    }

    // render
    const controls = <>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={form.title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input
                type='number'
                value={form.amount}
                min='0.01'
                step='0.01'
                onChange={amountChangeHandler}
            />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input
                type='date'
                value={form.date}
                min='2019-01-01'
                max='2022-12-31'
                onChange={dateChangeHandler}
            />
        </div>
    </>
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>{controls}</div>
            <div className='new-expense__actions'>
                <button onClick={props.onHideForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;