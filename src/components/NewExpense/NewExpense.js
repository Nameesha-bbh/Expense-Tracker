import './NewExpense.css';
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const [isEditing , setIsEditing] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    function isEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData = {saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;