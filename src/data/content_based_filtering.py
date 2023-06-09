from create_df import create_df
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import make_column_transformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

df = create_df()

# Extract 'name' from 'extendedIngredients' to form 'ingredients' column.
df['ingredients'] = df['extendedIngredients'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])


df['title'] = df['title'].str.lower()

# Convert 'ingredients' from list of words to sentences
df['ingredients'] = df['ingredients'].apply(lambda x: ' '.join(map(str, x)))

# preprocess the DataFrame
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), ['calories', 'protein', 'fat', 'carbs']),
        ('cat', OneHotEncoder(handle_unknown='ignore'), ['dishTypes', 'diets']),
        ('txt', CountVectorizer(analyzer='word', ngram_range=(1, 2)), 'ingredients')],
    remainder='drop'
)

df_preprocessed = preprocessor.fit_transform(df)
df_preprocessed = np.where(np.isinf(df_preprocessed), np.nan, df_preprocessed)
df_preprocessed = np.nan_to_num(df_preprocessed)

# calculate cosine similarities
cos_similarities = cosine_similarity(df_preprocessed)

print(cos_similarities)
