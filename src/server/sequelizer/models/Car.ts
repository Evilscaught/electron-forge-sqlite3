import { Model, DataTypes, Sequelize } from 'sequelize';

class Car extends Model {
  declare id:          string;
  declare make:        string;
  declare year:        number;
  declare model:       string;
}

function defineCar (sequelize: Sequelize) {
  return Car.init({
    id: {
      type:         DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:   true
    },
    make: {
      type:     DataTypes.STRING,
      defaultValue: ''
    },
    year: {
      type:         DataTypes.NUMBER
    },
    model: {
      type:         DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    sequelize: sequelize,
    tableName: 'Cars',
    modelName: 'Car'
  });
}

export { defineCar as default, Car};
