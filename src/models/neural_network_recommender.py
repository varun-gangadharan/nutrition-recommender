import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def create_df():
    # Load your data from a CSV file
    data = pd.read_csv('../data/mydata.csv')
    return data

def preprocess(df):
    # Initialize TfidfVectorizer
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    
    # Compute the TF-IDF matrix
    matrix = tfidf_vectorizer.fit_transform(df['title'])

    return matrix.toarray()

df = create_df()
df_preprocessed = preprocess(df)

# Compute cosine similarities
cos_similarities = cosine_similarity(df_preprocessed)
