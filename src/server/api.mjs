import express from 'express';

const app = express();

const recipes = [
  {
    "name": "The Four Horsemen",
    "location": "Brooklyn, NYC",
    "ingredients": [
      "pork",
      "daikon",
    ],
    "recipe": "Pork bahn mi, chicken liver mousse, pickled daikon, cilantro, anchovy"
  },

  {
    "name": "108",
    "location": "Copenhagen, Denmark",
    "ingredients": [
      "pork",
      "berries",
    ],
    "recipe": "Glazed pork chop, berries, anchovy, spices"
  }
]

app.get('/results', (req, res) => {
  const { ingredient1, ingredient2 } = req.query;
  // TODO: return filtered list of recipes
  res.json(recipes)
});

export default app;
