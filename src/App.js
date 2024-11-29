import { useState } from 'react';
import './App.css';
import Car from './components/Car';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');
  const [edittedCar, setEdittedCar] = useState(null);
  const [cars, setCars] = useState([
    { name: 'Honda', number: '123-45-678', price: '15.55' },
    { name: 'Toyota', number: '321-54-786', price: '21.95' },
    { name: 'Tesla', number: '555-21-444', price: '35.94' },
  ]);
  const addCar = () => {
    const newCar = { name: name, number: number, price: price };
    setCars([...cars, newCar]);
    alert(name + ' Added');
    setName('');
    setNumber('');
  };
  const deleteCar = (index) => {
    const newCars = cars.slice();
    newCars.splice(index, 1);
    setCars(newCars);
  };
  const editCar = (index) => {
    const newCars = cars.slice();
    setName(newCars[index].name);
    setNumber(newCars[index].number);
    setPrice(newCars[index].price);
    setEdittedCar(index);
  };
  const updateCar = () => {
    const carIndex = edittedCar;
    const newCars = cars.slice();
    const carToEdit = newCars[carIndex];
    carToEdit.name = name;
    carToEdit.number = number;
    carToEdit.price = price;
    setCars(newCars);
    setName('');
    setNumber('');
    setPrice('');
    setEdittedCar(null);
    alert('car price editted succesfully');
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
          <label htmlFor="price" className="ms-3">
            Price:
          </label>
          <input
            name="price"
            className="ms-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button className="btn btn-primary ms-3" onClick={addCar}>
            Add Car
          </button>
          <button className="btn btn-warning ms-3" onClick={() => updateCar()}>
            Finish Updating
          </button>
        </div>
        {cars.map((car, index) => (
          <Car
            index={index}
            car={car}
            key={index}
            onDeleteCar={() => deleteCar(index)}
            onEditCar={() => editCar(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
