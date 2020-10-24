import express from 'express';

const app = express();

app.get('/results', (req, res) => {
  res.json([
    {
      "name": "The Four Horsemen",
      "location": "Brooklyn, NYC",
      "recipe": "Pork bahn mi, chicken liver mousse, pickled daikon, cilantro, anchovy"
    },
  
    {
      "name": "108",
      "location": "Copenhagen, Denmark",
      "recipe": "Glazed pork chop, berries, anchovy, spices"
    }
  ])

});

export default app;