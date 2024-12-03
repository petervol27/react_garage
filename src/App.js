import { useState } from 'react';
import './App.css';
import Car from './components/Car';

function App() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');
  const [edittedCar, setEdittedCar] = useState(null);
  const [search, setSearch] = useState('');
  const [cars, setCars] = useState([
    { brand: 'Honda', model: 'Civic', number: '123-45-678', price: '15.55' },
    { brand: 'Toyota', model: 'Corolla', number: '321-54-786', price: '21.95' },
    { brand: 'Tesla', model: 'X1', number: '555-21-444', price: '35.94' },
  ]);
  const addCar = () => {
    const validateNumberRegex = /^\d{3}-\d{2}-\d{3}$/;
    if (brand === '' || model === '' || number === '' || price === '') {
      alert('Fields cannot be empty!');
      return;
    } else if (!validateNumberRegex.test(number)) {
      alert('Car number should be numbers in the pattern xxx-xx-xxx');
      return;
    }

    const newCar = { brand: brand, model: model, number: number, price: price };
    setCars([...cars, newCar]);
    alert('New Car Added');
    setBrand('');
    setNumber('');
    setModel('');
    setPrice('');
  };
  const deleteCar = (index) => {
    const validateDelete = window.confirm('Are you sure?');
    if (validateDelete) {
      const newCars = cars.slice();
      newCars.splice(index, 1);
      setCars(newCars);
    } else {
      alert('Car not deleted!');
    }
  };
  const editCar = (index) => {
    const newCars = cars.slice();
    setBrand(newCars[index].brand);
    setNumber(newCars[index].number);
    setPrice(newCars[index].price);
    setModel(newCars[index].model);
    setEdittedCar(index);
  };
  const updateCar = () => {
    const carIndex = edittedCar;
    const newCars = cars.slice();
    const carToEdit = newCars[carIndex];
    carToEdit.brand = brand;
    carToEdit.number = number;
    carToEdit.price = price;
    carToEdit.model = model;
    setCars(newCars);
    setBrand('');
    setNumber('');
    setPrice('');
    setModel('');
    setEdittedCar(null);
    alert('car editted succesfully');
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
            deleteCar={deleteCar}
            editCar={editCar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
