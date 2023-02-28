import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customer.customers);

  const addCash = (opcash) => {
    dispatch({ type: "ADD_CASH", payload: opcash })
  }
  const getCash = (opcash) => {
    dispatch({ type: "GET_CASH", payload: opcash })
  }
  const addClient = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }
  const removeClient = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id })
  }

  return (
    <div className="App">
      <div className='App-header'>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addClient(prompt())}>Add client</button>
        <button onClick={() => getCash(Number(prompt()))}>Remove client</button>
        <p>{cash}</p>
        {customers.length !== 0 ?
          <div>
            {customers.map(customer =>
              <div onClick={() => removeClient(customer)} key={customer.id}>
                {customer.name}
              </div>)}
          </div> :
          <p>have no clients</p>}
      </div>
    </div>
  );
}

export default App;
