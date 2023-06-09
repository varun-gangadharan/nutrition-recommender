from pymongo import MongoClient
import pprint


def view_results_in_db(db_name, collection_name):
    client = MongoClient()
    db = client[db_name]
    collection = db[collection_name]

    # Fetch all documents
    results = collection.find()

    # Print each document
    for result in results:
        pprint.pprint(result)
        print('\n' + '-'*50 + '\n')

# Call the function with your db and collection names
view_results_in_db('recipe_db', 'recipe_collection')
