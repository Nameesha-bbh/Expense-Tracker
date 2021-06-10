import './ExpenseForm.css';
import {React , useState } from 'react';
function ExpenseForm(props){

    const [enteredTitle , SetEnteredTitle] = useState('');
    const [enteredAmount , SetEnteredAmount] = useState('');
    const [enteredDate , SetEnteredDate] = useState('');

    function titleChangeHandler(event){
        SetEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event){
        SetEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
        SetEnteredDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const expenseItems = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseItems);
        SetEnteredAmount('');
        SetEnteredDate('');
        SetEnteredTitle('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="new-expense__control label">Title</label>
                    <input type="text" 
                            className="new-expense__control input" 
                            value = {enteredTitle}
                            onChange = {titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label className="new-expense__control label">Amount</label>
                    <input type="number" 
                            className="new-expense__control input" 
                            min="100" 
                            step="100" 
                            value = {enteredAmount}
                            onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label className="new-expense__control label">Date</label>
                    <input type="date" 
                            min="2019-01-01" 
                            max="2022-12-31" 
                            className="new-expense__control input"
                            value = {enteredDate}
                            onChange={dateChangeHandler}/>
                </div>

                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;