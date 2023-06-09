import requests
from pymongo import MongoClient
import time
import pandas as pd
import json

client = MongoClient()  # assumes a running MongoDB instance on localhost:27017
db = client['recipe_db']

# Spoonacular API setup
api_key = '023cad29ba9445db8b398bc143ce9d50'
search_by_ingredients_url = 'https://api.spoonacular.com/recipes/findByIngredients'
search_by_nutrients_url = 'https://api.spoonacular.com/recipes/findByNutrients'
recipe_information_url = 'https://api.spoonacular.com/recipes/{id}/information'
similar_recipes_url = 'https://api.spoonacular.com/recipes/{id}/similar'

def fetch_recipes(url, params):
    params['apiKey'] = api_key
    response = requests.get(url, params=params)
    if response.status_code != 200:
        raise Exception(f"Query failed to run with a {response.status_code}. Please check your parameters and try again.")
    else:
        return response.json()

def store_recipes(recipes, collection):
    for recipe in recipes:
        # Fetch detailed recipe information and nutrition
        recipe_info = get_recipe_information(recipe['id'])
        # Add the detailed information to the recipe data
        recipe.update(recipe_info)
        # Store the combined data in MongoDB
        collection.insert_one(recipe)
    print(f"Successfully stored {len(recipes)} recipes in {collection.name} collection.")

def get_and_store_recipes(query_type, collection, **kwargs):
    url = ""
    if query_type == "ingredients":
        url = search_by_ingredients_url
    elif query_type == "nutrients":
        url = search_by_nutrients_url
    else:
        raise ValueError("Invalid query type. Use 'ingredients' or 'nutrients'")

    json_data = fetch_recipes(url, kwargs)
    store_recipes(json_data, collection)

def get_recipe_information(recipe_id):
    url = recipe_information_url.format(id=recipe_id)
    params = {'includeNutrition': True}
    return fetch_recipes(url, params)

def get_similar_recipes(recipe_id):
    url = similar_recipes_url.format(id=recipe_id)
    return fetch_recipes(url, {})

# Use examples:
recipe_collection = db['recipe_collection']

# Fetching and storing recipes by ingredients
get_and_store_recipes('ingredients', recipe_collection, ingredients='apples,flour,sugar')

# Fetching and storing recipes by nutrients
get_and_store_recipes('nutrients', recipe_collection, minCarbs=10, maxCarbs=50, minProtein=5, maxProtein=20)
