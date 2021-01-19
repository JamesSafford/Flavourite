import runQuery from '../runQuery.mjs';

const query = 
`SELECT
recipe.recipe_id,
restaurant,
recipe,
"location"
FROM
recipe
INNER JOIN restaurant ON recipe.restaurant_id = restaurant.restaurant_id
INNER JOIN recipe_ingredient AS recipe_ingredient1 ON recipe.recipe_id = recipe_ingredient1.recipe_id
INNER JOIN ingredient AS ingredient1 ON ingredient1.ingredient_id = recipe_ingredient1.ingredient_id
INNER JOIN recipe_ingredient AS recipe_ingredient2 ON recipe.recipe_id = recipe_ingredient2.recipe_id
INNER JOIN ingredient AS ingredient2 ON ingredient2.ingredient_id = recipe_ingredient2.ingredient_id
INNER JOIN search_term AS search_term1 ON search_term1.ingredient_id = ingredient1.ingredient_id
INNER JOIN search_term AS search_term2 ON search_term2.ingredient_id = ingredient2.ingredient_id
where ingredient1.ingredient_id = $ingredient1
or ingredient2.ingredient_id = $ingredient2
group by recipe.recipe_id;`

export default async function filterRecipes({
  ingredient1,
  ingredient2
}) {
  try {
    const filteredRecipes = await runQuery(query, {
      $ingredient1: ingredient1,
      $ingredient2: ingredient2,
    });
    return filteredRecipes;
  } catch (error) {
    throw new Error(`Invalid query: ${error.message}`); 
  }
};
