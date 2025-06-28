import { Sequelize } from 'sequelize';
import { app } from 'electron';
import path from 'path';
import defineModels from './models';

const userDir = app.getPath('userData');
const dbPath = path.join(userDir, 'local.db');

console.info('Loading database saved at: ', dbPath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

defineModels(sequelize);

export default sequelize;
