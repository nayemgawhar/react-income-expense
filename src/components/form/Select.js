import './Select.css';
import { useEffect } from 'react';

const Select = ({ option, setOption, income, setIncome, expense, setExpense}) => {


  const datas = [
    {
      id : 1,
      income : "Salary",
      expense : "Education"
    },
    {
      id : 2,
      income : "Stock",
      expense : "Transportation"
    },
    {
      id : 3,
      income : "Mutual Fund",
      expense : "Furniture"
    }
  ]


  useEffect(() => {
    setIncome(datas[0]?.income)
    setExpense(datas[0]?.expense)
  
    
  }, [option])
  

  return (
    <div className='data'>
      <select className='select1' value= {option} onChange = {(e) => setOption(e.target.value)}>
        <option value='income'>Income</option>
        <option value='expense'>Expense</option>
        
        
      </select>
      
      {(option == 'income') ? 
      
      <select className='select2' value={income} key={datas.id}onChange = {(e) => setIncome(e.target.value)}>
       
      {datas.map((data) => {
        return (
          <option key={data.id} value = {data.income} >{data.income}</option>
        )
      })}
      </select>

      :
    
      <select className='select2' value={expense} key={datas.id} onChange = {(e) => setExpense(e.target.value)}>

      {datas.map((data) => {
      return (
        <option key = {data.id} value={data.expense}>{data.expense}</option>
      )
      })}
    </select>
}
    </div>
  )
}

export default Select;