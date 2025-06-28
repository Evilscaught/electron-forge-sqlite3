import React, { useEffect, useState } from 'react';
import './styling/App.scss';

interface ICar {
  id:    string;
  make:  string;
  model: string;
  year:  number;
}

function App () {
  const [ car, setCar ] = useState<ICar | null>(null);
  const [ error, setError ] = useState<false | string>(false);
  const [ success, setSuccess ] = useState<boolean>(false);

  useEffect(() => {
    async function loadCar (): Promise<void> {
      const { car, success, message } = await window.electron.sequelizer('default', { route: 'cars', method: 'getCar' });

      setError(message);
      setSuccess(success);
      setCar(car);
    }

    loadCar();
  }, []);

  if (!success) {
    return (
      <main>
        <h3>Uh oh! There was an error:</h3>
        <div>{error}</div>
      </main>
    );
  }

  if (success && !car) {
    return (
      <main>
        <h3>No car exists in database</h3>
      </main>
    )    
  }
  
  return (
    <main>
      <div>
        <h3>Car Information</h3>
        <p>Serial Number: {car.id}</p>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
      </div>
    </main>
  );
}

export default App;
