import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
	return res.send('Tudo funcionando!');
});

export default routes;
