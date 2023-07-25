import './Balance.css';
import useFetch from '../../useFetch';
import { useState, useEffect } from 'react';


const Balance = () => {

    const [ value ] = useFetch('budget', []);
    const [incomeAmount, setIncomeAmount] = useState(0);
    const [expenseAmount, setExpenseAmount] = useState(0);


    let total_income = 0;
    let total_expense = 0;

    useEffect(() => {
        {value.map((d) => {
        if (d.option === 'income' && d.expense === '') {
            total_income += d.amount
        setIncomeAmount(total_income)
    }else{
        total_expense += d.amount
        setExpenseAmount(total_expense)
    }
    })}
    }, [value])


  return (
    <div className="top">
            <div className="total">
                <h3 className='totalBalance'>Total Balance : Tk.  {incomeAmount - expenseAmount } </h3>
            </div>
            <div className="rem">
                <div className="income">
                    <h3>Income</h3>
                    <p>Tk. {incomeAmount} </p>
                </div>
                <div className="expense">
                    <h3>Expense</h3>
                    <p>Tk. {expenseAmount}</p>
                </div>
            </div>
        </div>
  )
}

export default Balance;