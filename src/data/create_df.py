import pandas as pd
from pymongo import MongoClient

def create_df():
    # Create a MongoDB client, replace "your_mongo_url" with your actual MongoDB URI
    client = MongoClient("mongodb://localhost:27017")

    # Access your database, replace "your_database" with your actual database name
    db = client["recipe_db"]

    # Access your collection, replace "your_collection" with your actual collection name
    collection = db["recipe_collection"]

    # Fetch all documents from your collection
    data = list(collection.find())

    # Transform MongoDB data into a pandas DataFrame
    df = pd.json_normalize(data)

    print(df.columns)


    return df