create TABLE 'ingredients' (
id int not null primary key,
ingredient text not null,
);

create TABLE 'recipe_ingredients'(
recipe_id int not null,
ingredient_id int not null,
primary key (recipe_id, ingredient_id)
);

create TABLE 'recipes' (
id int not NULL primary key,
recipe TEXT not NULL,
restaurant_id int not NULL
);

create table 'restaurants' (
id int not null primary key,
'name' TEXT not null,
location text not null
);

create table 'search_terms' (
ingredient_id int not NULL,
synonym text not NULL,
primary key (ingredient_id, synonym)
);