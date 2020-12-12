-- -------------------------------------------------------------
-- TablePlus 3.9.1(342)
--
-- https://tableplus.com/
--
-- Database: recipes.db
-- Generation Time: 2020-11-15 13:59:32.6990
-- -------------------------------------------------------------


INSERT INTO "ingredients" ("id", "ingredient") VALUES
('1', 'pork'),
('2', 'daikon'),
('3', 'berries');

INSERT INTO "recipe_ingredients" ("recipe_id", "ingredient_id") VALUES
('1', '1'),
('1', '2'),
('2', '1'),
('2', '3');

INSERT INTO "recipes" ("id", "recipe", "restaurant_id") VALUES
('1', 'Pork bahn mi, chicken liver mousse, pickled daikon, cilantro, anchovy', '1'),
('2', 'Glazed pork chop, berries, anchovy, spices.', '2');

INSERT INTO "restaurants" ("id", "name", "location") VALUES
('1', 'The Four Horsemen', 'Brooklyn, NYC'),
('2', '108', 'Copenhagen, Denmark');

INSERT INTO "search_terms" ("ingredient_id", "synonym") VALUES
('1', 'pork chop'),
('1', 'pork belly'),
('1', 'bacon'),
('1', 'hog'),
('1', 'jowl'),
('1', 'guanciale'),
('1', 'pig'),
('2', 'white radish'),
('2', 'daikon radish'),
('2', 'winter radish'),
('2', 'oriental radish'),
('2', 'long white radish'),
('2', 'true daikon'),
('3', 'damson'),
('3', 'berries')
('3', 'canistel'),
('3', 'capulin'),
('3', 'checkerberry'),
('3', 'feijoa'),
('2', 'mooli'),
('2', 'daikon'),
('2', 'radish'),
('1', 'pork');

