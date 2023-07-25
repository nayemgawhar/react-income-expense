import './Budget.css';
import Balance from './Balance';
import Transaction from './Transaction';
import Footer from './Footer';

const Budget = () => {

  return (
      <div className="App">
          <h2>Income Expense Tracking</h2>
    <div className="full">
        <Balance />
        <hr className='hr' />
        <Transaction />
        <Footer />
    </div>
    </div>
  )
}

export default Budget;