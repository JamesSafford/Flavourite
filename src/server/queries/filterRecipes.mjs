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

inner join search_terms as search_terms1
on search_terms1.ingredient_id = ingredient1.id
inner join search_terms as search_terms2
on search_terms2.ingredient_id = ingredient2.id

where search_terms1.synonym = $ingredient1 collate nocase
and search_terms2.synonym = $ingredient2 collate nocase
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
