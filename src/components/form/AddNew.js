import Enter from "./Enter";
import Select from "./Select";
import './AddNew.css';
import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";


const AddNew = () => {

  const [budget, setBudget] = useFetch('budget', []);

  const [option, setOption] = useState('income');
  const [income, setIncome] = useState('Salary')
  const [expense, setExpense] = useState('Education')
  const [amount, setAmount] = useState('')
  const [detail, setDetail] = useState('')


const handleBudget = (e) => {
  
    e.preventDefault();


    let budgets = {
      option,
      amount,
      detail,
      income: option == 'income' ? income : '',
      expense:option != 'income' ? expense : ''
    }
    setBudget([...budget, budgets]);
    setOption('income');
    setIncome('Salary');
    setExpense('Education');
    setAmount('');
    setDetail('');

  } 


  // useEffect(() => {
  //   // dataToNew(budget);
  //  if(budget?.length){
  //     localStorage.setItem('budget', JSON.stringify(budget));
  //  }
  
  // }, [budget])
  

  return (
    <>
    <div className="text">
      <h2>Add New</h2>
    
    <div className="box">
      <Select option = {option} setOption = {setOption} income = {income} expense={expense} setIncome= {setIncome} setExpense = {setExpense} />
      <Enter amount = {amount} setAmount = {setAmount} detail = {detail} setDetail = {setDetail} handleBudget = {handleBudget} />
      
    </div>
    
    </div>
    </>
  )
}

export default AddNew;