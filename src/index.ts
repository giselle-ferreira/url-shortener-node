import express from 'express';
import { UrlController } from './controller/UrlController'
import { MongoConnection } from './database/MongoConnection';

const api = express()
const port = process.env.PORT || 3000

api.use(express.json())

const urlController = new UrlController();

const database = new MongoConnection();
database.connect();

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)


api.listen(port, () => console.log(`Express listening on Port ${port}`))
