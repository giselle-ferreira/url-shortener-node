import mongoose from 'mongoose';
import { config } from './../config/Constants';

module.exports = {
    async connect() {
        try {
            mongoose.connect(config.MONGO_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log("Connected to Database")

        } catch (err) {
            console.error(err)
            process.exit(1)
        }
    }
}