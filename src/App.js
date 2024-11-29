import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [cars, setCars] = useState([
    { name: 'Honda', number: '123-45-678' },
    { name: 'Toyota', number: '321-54-786' },
    { name: 'Tesla', number: '555-21-444' },
  ]);
  const addCar = () => {
    const newCar = { name: name, number: number };
    setCars([...cars, newCar]);
    alert(name + ' Added');
    setName('');
    setNumber('');
  };
  return (
    <>
      <div className="container text-center mt-3">
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            className="ms-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="number" className="ms-3">
            Number:
          </label>
          <input
            name="number"
            className="ms-3"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <button className="btn btn-primary ms-3" onClick={addCar}>
            Add Car
          </button>
        </div>
        {cars.map((car, index) => (
          <div className="card mb-3 w-25 mx-auto bg-light" key={index}>
            <div className="card-body">
              <h5 className="card-title">{car.name}</h5>
              <p className="card-text">Car number: {car.number}</p>
              <button
                href="#"
                className="btn btn-primary"
                onClick={() => alert(car.name)}
              >
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
