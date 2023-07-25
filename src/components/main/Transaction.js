import './Transaction.css';
import useFetch from '../../useFetch';

const Transaction = () => {

  const [ Value ] = useFetch('budget', []);


  return (
    <div className="middle">
      <h2 style={{color : 'blue' }}><u>Transaction</u></h2>
      
      {Value.map((v) => {
        return (
            <>
                    {v.option === 'income' ? 
                        <div className="in">
                            <h3 className='title'>Income</h3>
                            <h3 className='title'>{v.income}</h3>
                            <p className='amount'>Tk. {v.amount}</p>
                        </div> 
                        : 
                        <div className="exp">
                            <h3 className='title'>Expense</h3>
                            <h3 className='title'>{v.expense}</h3>
                            <p className='amount'>Tk. {v.amount}</p>
                        </div> 
                    }
            </>
        )
      })}
      <hr />
    </div>
  )
}

export default Transaction;