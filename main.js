import express from 'express';
import homeController from './routes/homeController';

const app = express();
const portNumber = 3000;

app.set('view engine', 'ejs');

app.use("/", homeController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Que droga');
  err.status = 404;
  next(err);
});

app.listen(portNumber, (error) => {
    console.log("Server run on port " + portNumber);
});
