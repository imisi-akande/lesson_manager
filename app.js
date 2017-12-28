// Set up the express app
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import authors from './server/controllers/authors';
import notes from './server/controllers/notes';


const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/authors', authors.index);
app.get('/authors/:id', authors.show);
app.post('/authors', authors.create);
app.put('/authors/:id', authors.update);
app.delete('/authors/:id', authors.delete);

app.get('/notes', notes.index);
app.get('/notes/:id', notes.show);
app.post('/notes', notes.create);
app.put('/notes/:id', notes.update);
app.delete('/notes/:id', notes.delete);

app.use((err, req, res, next) => {
  console.log('I was called');
  return res.status(500).json(err);
});

app.set('port', process.env.PORT || 9999);
app.listen(app.get('port'), () => {
  console.log("Server is running on port", app.get('port'));
});