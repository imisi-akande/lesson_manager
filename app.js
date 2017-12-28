// Set up the express app
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const app = express();

//App routes
app.use(routes(express.Router()));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  return res.status(500).json(err);
});

app.set('port', process.env.PORT || 9999);
app.listen(app.get('port'), () => {
  console.log("Server is running on port", app.get('port'));
});