import express from 'express';
import { config } from 'dotenv';

config({
    path: './.env'
})

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello World");
})

app.post('/URL', (req, res, next) => {

})

app.get('/:id', (req, res, next) => {

})
app.get('//analytics/:id', (req, res, next) => {

})



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is served at ${port}`);
})