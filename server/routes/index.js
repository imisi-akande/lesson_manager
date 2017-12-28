import authors from '../controllers/authors';
import notes from '../controllers/notes';

export default (router) =>  {
    router.get('/authors', authors.index);
    router.get('/authors/:id', authors.show);
    router.post('/authors', authors.create);
    router.put('/authors', authors.update);
    router.delete('/authors/:id', authors.delete);
  
    router.get('/notes', notes.index);
    router.get('/notes/:id', notes.show);
    router.post('/notes', notes.create);
    router.put('/notes/:id', notes.update);
    router.delete('/notes/:id', notes.delete);
  
    return router
  };
  