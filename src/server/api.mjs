import express from 'express';
import filterRecipes from './queries/filterRecipes.mjs';

const app = express();

app.get('/results', async (req, res) => {
  const { ingredient1, ingredient2 } = req.query;
  try {
    const filteredRecipes = await filterRecipes({ ingredient1, ingredient2 });
    res.json(filteredRecipes)
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
});

export default app;
