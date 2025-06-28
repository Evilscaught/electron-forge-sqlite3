import { Sequelize } from 'sequelize';
import defineCar from './Car';

function defineModels (sequelize: Sequelize) {
  defineCar(sequelize);
}

export default defineModels;
