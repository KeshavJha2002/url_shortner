import express from 'express';
import { config } from 'dotenv';
import router from './routes/urlRoute.js';
import mongoose from 'mongoose';

config({
    path: './.env'
})

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello World")
})

app.use(express.json());
app.use('/url', router);

mongoose.connect(process.env.URI)
    .then(() => {
        try {
            console.log("DB connected");
        } catch (e) {
            console.log(e);
        }
    });

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is served at ${port}`);
})