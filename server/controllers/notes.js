import { Note } from '../models/'

export default {
  //Get a list of all notes using model.findAll()
  index(req, res) {
    Note.findAll()
      .then((notes) => {
        res.status(200).json(notes);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //Get a lesson note by it's unique ID using model.findById()
  show(req, res) {
    Note.findById(req.params.id)
    .then((note) => {
      res.status(200).json(note);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  //Create a new lesson Note using model.create()
  create(req, res) {
    Note.create(req.body)
      .then((newNote) => {
        res.status(200).json(newNote);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //Edit an existing note details using model.update()
  update(req, res) {
    Note.update(req.body, {
        where: {
            id: req.params.id
        },
        returning:true
        })
    .then((updatedNotes) => {
    res.status(200).json(updatedNotes);
    })
    .catch((error) => {
    res.status(500).json(error);
    });
  },

  //Delete an existing note by the unique ID using model.destroy()
  delete(req, res) {
    Note.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((deletedNotes) => {
      res.status(200).json({
        deletedNotes,
        message: 'This document has been deleted successfully'
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  }
};