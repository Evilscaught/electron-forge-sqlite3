import sequelize from '../init';

async function bridgeConnection () {
  try {
    await sequelize.authenticate();
    console.info('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  try {
    /**
     ** Creates tables from the defined models and synchronizes them to the SQLite database
     *? force: (false by default): Will recreate tables (dropping existing data)
     *? alter: (false by default): Will forcefully reapply models to the tables
     */

    const syncResult = await sequelize.sync({ force: false, alter: false });
    console.info('Models successfully synced to the database', (syncResult as any).options.storage);
  } catch (error) {
    console.info('There was an error syncing the models to the database', error);
  }

  return sequelize;
}

export default bridgeConnection;
