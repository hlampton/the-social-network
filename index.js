const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialnetwork', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Mongoose Models
const User = mongoose.model('User', {
  name: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
const Thought = mongoose.model('Thought', {
  text: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }]
});
const Reaction = mongoose.model('Reaction', {
  type: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// API GET Routes
app.get('/api/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).send(err));
});
app.get('/api/thoughts', (req, res) => {
  Thought.find()
    .populate('author reactions.author')
    .then(thoughts => res.json(thoughts))
    .catch(err => res.status(500).send(err));
});

// API POST, PUT, DELETE Routes
app.post('/api/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).send(err));
});
app.put('/api/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).send(err));
});
app.delete('/api/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).send(err));
});
app.post('/api/thoughts', (req, res) => {
  Thought.create(req.body)
    .then(thought => res.json(thought))
    .catch(err => res.status(500).send(err));
});
app.put('/api/thoughts/:id', (req, res) => {
  Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate('author reactions.author')
    .then(thought => res.json(thought))
.catch(err => res.status(500).send(err));
});
app.delete('/api/thoughts/:id', (req, res) => {
Thought.findByIdAndDelete(req.params.id)
.then(thought => res.json(thought))
.catch(err => res.status(500).send(err));
});
app.post('/api/reactions', (req, res) => {
Reaction.create(req.body)
.then(reaction => res.json(reaction))
.catch(err => res.status(500).send(err));
});
app.delete('/api/reactions/:id', (req, res) => {
Reaction.findByIdAndDelete(req.params.id)
.then(reaction => res.json(reaction))
.catch(err => res.status(500).send(err));
});

// Start the Server
app.listen(3000, () => {
console.log('Server started and Mongoose models synced to MongoDB');
});