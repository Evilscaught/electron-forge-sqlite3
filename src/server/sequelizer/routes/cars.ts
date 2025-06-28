/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
import bridgeConnection from '.';

async function getCar () {
  const sequelize = await bridgeConnection();
  const { models: { Car } } = sequelize;

  const car = await Car.create({
    make: 'Honda',
    year: 2019,
    model: 'Civic'
  });
  car.save();

  try {
    const car = (await Car.findAll({ raw: true })).pop();

    return {
      car,
      success:     true,
      message:     car ? 'Car successfully retrieved' : 'No car found'
    };
  } catch (error) {
    console.info('There was an error retrieving the car', error);
    return { success: false, message: error.message };
  }
}

const cars = {
  getCar
};

export { cars as default };
