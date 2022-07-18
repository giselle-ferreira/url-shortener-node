import express from 'express';

const api = express()
const port = process.env.PORT || 3000
const urlController = require('./controller/UrlController')
const database = require('./database/MongoConnection')

api.use(express.json())

database.connect();

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)


api.listen(port, () => console.log(`Express listening on Port ${port}`))
