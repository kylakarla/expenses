import './App.css';
import Expenses from "./components/Expenses.jsx";
import NewExpense from './components/NewExpense.jsx';

const App = () => {
    const data = [
    {
      id: 'e1',
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      id: 'e2',
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    }
  ] 
    return (
      <div className='app'>
        <NewExpense></NewExpense>
        <Expenses expenses={data}/>
      </div>
    );
  }
  
  export default App