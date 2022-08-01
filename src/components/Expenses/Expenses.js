import { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterChange, setFilterChange] = useState('2020');

  const filterChnageHandler = (ExpensesYear) => {
     setFilterChange(ExpensesYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterChange;
  });

 


    return (
      <div>
        <Card className="expenses">
         <ExpensesFilter 
           selected={filterChange} 
           onChangeFilter={filterChnageHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses}/>
        </Card>

      </div>
    );
}

export default Expenses;