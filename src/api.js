import axios from 'axios';
// const cars = [
//   { brand: 'Honda', model: 'Civic', number: '123-45-678', price: '1555' },
//   { brand: 'Toyota', model: 'Corolla', number: '321-54-786', price: '2195' },
//   { brand: 'Tesla', model: 'X1', number: '555-21-444', price: '3594' },
// ];

export const getAllCars = async () => {
  const response = await axios.get('http://localhost:3005/cars');
  return response.data;
};

export const addCar = async (brand, model, number, price) => {
  const validateNumberRegex = /^\d{3}-\d{2}-\d{3}$/;
  if (brand === '' || model === '' || number === '' || price === '') {
    alert('Fields cannot be empty!');
    return;
  } else if (!validateNumberRegex.test(number)) {
    alert('Car number should be numbers in the pattern xxx-xx-xxx');
    return;
  }
  await axios.post('http://localhost:3005/cars', {
    brand: brand,
    model: model,
    number: number,
    price: price,
  });
  alert('Car Added succesfully');
};
export const deleteCar = async (carId) => {
  const validateDelete = window.confirm('Are you sure you want to delete car?');
  if (validateDelete) {
    await axios.delete(`http://localhost:3005/cars/${carId}`);
    alert('Car Deleted Succesfully');
  }
};

export const updateCar = async (
  car,
  newBrand,
  newModel,
  newNumber,
  newPrice
) => {
  await axios.put(`http://localhost:3005/cars/${car.id}`, {
    id: car.id,
    brand: newBrand,
    model: newModel,
    number: newNumber,
    price: newPrice,
  });
  alert('Car Updated Succesfully');
};
