import runQuery from '../runQuery.mjs';

xconst query = `
select recipes.id, name, recipe, location
from recipes
inner join ingredients
on recipes.id = ingredients.recipeid
where ingredient = $ingredient1 collate nocase
group by recipes.id`

export default async function filterRecipes({
  ingredient1,
  ingredient2
}) {
  try {
    const filteredRecipes = await runQuery(query, {
      $ingredient1: ingredient1,
      // $ingredient2: ingredient2,
    });
    return filteredRecipes;
  } catch (error) {
    throw new Error(`Invalid query: ${error.message}`); 
  }
}