import runQuery from '../runQuery.mjs';

const query = 
`select recipes.id, name, recipe, location
from recipes

inner join restaurants
on recipes.restaurant_id = restaurants.id

inner join recipe_ingredients as recipe_ingredient1
on recipes.id = recipe_ingredient1.recipe_id
inner join ingredients as ingredient1
on ingredient1.id = recipe_ingredient1.ingredient_id

inner join recipe_ingredients as recipe_ingredient2
on recipes.id = recipe_ingredient2.recipe_id
inner join ingredients as ingredient2
on ingredient2.id = recipe_ingredient2.ingredient_id

where ingredient1.id = $ingredient1
and ingredient2.id = $ingredient2
group by recipes.id;`

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
