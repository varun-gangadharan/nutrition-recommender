from pymongo import MongoClient
import re

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
    # Clean up ingredients list
    if 'usedIngredients' in result:
        for ingredient in result['usedIngredients']:
            # Convert to grams
            if 'unit' in ingredient and ingredient['unit'] in conversion_factors:
                ingredient['amount'] *= conversion_factors[ingredient['unit']]
                ingredient['unit'] = 'g'
            # Clean ingredient name
            ingredient_name = ingredient['name']
            ingredient['name'] = re.sub(r'\W+', ' ', ingredient_name.strip().lower())
    # Clean up missed ingredients list
    if 'missedIngredients' in result:
        for ingredient in result['missedIngredients']:
            # Convert to grams
            if 'unit' in ingredient and ingredient['unit'] in conversion_factors:
                ingredient['amount'] *= conversion_factors[ingredient['unit']]
                ingredient['unit'] = 'g'
            # Clean ingredient name
            ingredient_name = ingredient['name']
            ingredient['name'] = re.sub(r'\W+', ' ', ingredient_name.strip().lower())

    cleaned_results.append(result)

# Replace the existing documents with the cleaned ones
for doc in cleaned_results:
    collection.replace_one({'_id': doc['_id']}, doc)

# Remove duplicates based on the 'id' field
distinct_ids = collection.distinct("id")
for distinct_id in distinct_ids:
    while collection.count_documents({"id": distinct_id}) > 1:
        # Get the _id of first occurance of the repeating document
        obj = collection.find_one({"id": distinct_id}, sort=[("_id", 1)])
        # Delete the first occurance, keep the others
        collection.delete_one({"_id": obj["_id"]})

print(f"Successfully cleaned {len(cleaned_results)} documents in the collection.")
