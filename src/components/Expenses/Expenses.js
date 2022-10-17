import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2022');

    const handleYearChange = (year) => {
        setFilterYear(year);
    }

    const expenses = props.expenses.filter(x => x.date.getFullYear().toString() === filterYear);

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter onSelectYear={handleYearChange} />
                <ExpensesList items={expenses} />
            </Card>
        </li>
    );
}

export default Expenses;