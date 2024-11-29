function Car({ car, index, onDeleteCar, onEditCar }) {
  return (
    <div className="card mb-3 w-25 mx-auto bg-light" key={index}>
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">
          Car number: {car.number} - {car.price}$
        </p>
        <button
          href="#"
          className="btn btn-danger"
          onClick={() => onDeleteCar(index)}
        >
          Delete Car
        </button>
        <button
          href="#"
          className="btn btn-primary ms-3"
          onClick={() => onEditCar(index)}
        >
          Edit Car
        </button>
      </div>
    </div>
  );
}

export default Car;
