import { useState, useEffect } from 'react';
import './App.css';
import Car from './components/Car';
import { getAllCars, addCar, deleteCar, updateCar } from './api';

function App() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');
  const [chosenCar, setChosenCar] = useState('');
  const [search, setSearch] = useState('');
  const [cars, setCars] = useState([]);
  const editCar = (car) => {
    setBrand(car.brand);
    setNumber(car.number);
    setPrice(car.price);
    setModel(car.model);
    setChosenCar(car);
  };
  useEffect(() => {
    getAllCars().then((allCars) => setCars(allCars));
  }, []);
  const updatedCars = () => {
    return cars.filter((car) => car.brand.startsWith(search));
  };
  return (
    <>
      <div className="container text-center mt-3">
        Search:
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        ></input>
        <div className="mb-3">
          <label htmlFor="brand">Brand:</label>
          <input
            required
            name="brand"
            className="ms-3"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>{' '}
          <label htmlFor="model">Model:</label>
          <input
            required
            name="model"
            className="ms-3"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          ></input>
          <label htmlFor="number" className="ms-3">
            Number:
          </label>
          <input
            required
            name="number"
            className="ms-3"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <label htmlFor="price" className="ms-3">
            Price:
          </label>
          <input
            type="number"
            required
            name="price"
            className="ms-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button
            className="btn btn-primary ms-3"
            onClick={() => addCar(brand, model, number, price)}
          >
            Add Car
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => updateCar(chosenCar, brand, model, number, price)}
          >
            Finish Updating
          </button>
        </div>
        {updatedCars().map((car, index) => (
          <Car
            index={index}
            car={car}
            key={index}
            deleteCar={() => deleteCar(car.id)}
            editCar={() => editCar(car)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
