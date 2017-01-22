const express = require('express');
const router = express.Router();const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/homeCards', (req, res) => {
  const cards = [
    {
      title: 'Cutest Puppy - Finley',
      imgUrl: '/assets/img/finleyPark.jpg'
    },    
    {
      title: 'Asheville: The Princess and the Pup',
      imgUrl: '/assets/img/Asheville.jpg'
    }
  ]
  res.send(cards);
});



module.exports = router;