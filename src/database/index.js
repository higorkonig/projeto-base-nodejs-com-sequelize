import Sequelize from 'sequelize';

//Models
//Importa seus models para cá quando criado

const models = []; // Adicione os models importados neste array, exemplo: ['User', 'Files']

import databaseConfig from '../config/database';

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
