import { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterChange, setFilterChange] = useState('2020');

  const filterChnageHandler = (ExpensesYear) => {
     setFilterChange(ExpensesYear);
  }


    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filterChange} onChangeFilter={filterChnageHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </Card>

        </div>
    );
}

export default Expenses;