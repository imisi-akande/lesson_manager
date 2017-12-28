import { Author } from '../models/';
import { Note } from '../models/';

export default {
  //Get a list of all authors using model.findAll()
  index(req, res) {
    Author.findAll({
      include: Note
    })
      .then( (authors) => {
        res.status(200).json(authors);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //Get an author by the unique ID using model.findById()
  show(req, res) {
    Author.findById(req.params.id, {
      include: Note
    })
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  //Create a new author using model.create()
  create(req, res) {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(200).json(newAuthor);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //Edit an existing author details using model.update()
  update(req, res) {
    console.log(req.params.id);
    Author.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true      
    })
    .then((updatedRecords) => {
      res.status(200).json(updatedRecords);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  //Delete an existing author by the unique ID using model.destroy()
  delete(req, res) {
    Author.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((deletedRecords) => {
      res.status(200).json({
        deletedRecords,
        message: 'This author has been deleted successfully'
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  }
};