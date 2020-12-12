import runQuery from '../runQuery.mjs';

const query = `
select ingredient_id as id, synonym as label
from search_terms
`;

export default async function fetchSearchTerms() {
  try {
    const filteredRecipes = await runQuery(query);
    return filteredRecipes;
  } catch (error) {
    throw new Error(`Invalid query: ${error.message}`); 
  }
};
