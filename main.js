import express from 'express';
import homeController from './routes/homeController';

const app = express();
const portNumber = 3000;

app.use("/", homeController);

app.listen(portNumber, (error) => {
    console.log("Server run on port " + portNumber);
});