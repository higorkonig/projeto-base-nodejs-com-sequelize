import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';

class Server {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use(routes);
	}
}

export default new Server().app;
