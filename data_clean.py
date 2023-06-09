from pymongo import MongoClient

client = MongoClient()

# Assuming that 'recipe_db' is your database
db = client.recipe_db

# Assuming that 'recipe_collection' is your collection
collection = db.recipe_collection

# Fetch all documents
results = collection.find()

# Container to store cleaned documents
cleaned_results = []

conversion_factors = {
    "Tbsp": 14.3,
    "cup": 201.6,
    "teaspoon": 4.2,
    # Add more conversion factors as per your needs
}

for result in results:
    if 'missedIngredients' in result:
        for ingredient in result['missedIngredients']:
            # Convert to grams
            if 'unit' in ingredient and ingredient['unit'] in conversion_factors:
                ingredient['amount'] *= conversion_factors[ingredient['unit']]
                ingredient['unit'] = 'g'

            # Handle missing data
            # Fill with suitable defaults or remove entries
            # Here I am filling with default values
            if 'amount' not in ingredient:
                ingredient['amount'] = 0.0
            if 'unit' not in ingredient:
                ingredient['unit'] = 'g'
    cleaned_results.append(result)

# Now cleaned_results contain your cleaned data. You can update your DB with this.





client = MongoClient()

# Assuming that 'recipe_db' is your database
db = client.recipe_db

# Assuming that 'recipe_collection' is your collection
collection = db.recipe_collection

# Fetch all documents
results = collection.find()

for result in results:
    if 'missedIngredients' in result:
        for ingredient in result['missedIngredients']:
            # Here ingredient['originalName'] contains the ingredient name
            ingredient_name = ingredient['originalName']
            # Do any cleaning required on ingredient_name
            # For example, you can lower case it, remove extra spaces etc.
            ingredient['originalName'] = ingredient_name.strip().lower()
    # Similarly for usedIngredients