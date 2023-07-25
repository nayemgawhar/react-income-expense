import Budget from './components/main/Budget';
import { Route, Routes } from 'react-router';
import AddNew from './components/form/AddNew';
import './App.css';


function App() {

  return (
    <>

    <Routes>
      <Route path = '/' element = {<Budget />} />
      <Route path = '/add' element = {<AddNew  />} />
    </Routes>
    </>
  );
}

export default App;
