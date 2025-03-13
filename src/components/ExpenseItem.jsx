
import './ExpenseItem.css'
import '../App.jsx'
import ExpenseDate from './ExpenseDate.jsx'
import Card from './card.jsx'

const ExpenseItem = (props) => {
    const ClickHandeler = () => {
        console.log('Clicked')
    }


    return (
        <li className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>{props.data.price}</div>
                <button onClick={ClickHandeler}>Click Me</button>
            </div>
        </li>
    )
}
export default ExpenseItem