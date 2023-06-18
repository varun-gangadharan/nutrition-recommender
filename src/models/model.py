# server.py
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Embedding, LSTM, Dropout, Dense
import keras

app = Flask(__name__)

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    # Load your model here and make predictions.
    # This is just a simple example to get you started.
    # You may need to modify this part based on your specific requirements.

    # Load data
    df = pd.read_csv("..components/sample.csv")

    # Combine all ingredients columns into a single column
    df['Ingredients'] = df[df.columns[6:]].apply(
        lambda x: ','.join(x.dropna().astype(str)),
        axis=1
    )

    # Split ingredients into a list
    df['Ingredients'] = df['Ingredients'].apply(lambda x: x.split(','))

    # Convert ingredient lists to sequences of integers
    mlb = MultiLabelBinarizer()
    df['IngredientIndices'] = df['Ingredients'].apply(lambda x: [mlb.classes_.tolist().index(i) for i in x])

    # Determine the number of unique ingredients
    num_unique_ingredients = len(mlb.classes_)

    # Set some variables
    embedding_dim = 50
    lstm_units = 100

    # Build the model
    model = Sequential()
    model.add(Embedding(num_unique_ingredients, embedding_dim, input_length=None))
    model.add(LSTM(lstm_units, return_sequences=True))
    model.add(Dropout(0.5))
    model.add(Dense(num_unique_ingredients, activation='softmax'))

    # Define a learning rate schedule
    lr_schedule = keras.optimizers.schedules.ExponentialDecay(
        initial_learning_rate=1e-2,
        decay_steps=10000,
        decay_rate=0.9)

    # Compile the model
    model.compile(loss='sparse_categorical_crossentropy', optimizer=keras.optimizers.Adam(learning_rate=lr_schedule))

    # Train the model
    model.fit(X_train_padded, np.expand_dims(X_train_padded, -1), epochs=20, batch_size=64)

    # Get a recipe
    recipe_indices = df['IngredientIndices'][0]

    # Get the model's output for that recipe
    output = model.predict(np.array([recipe_indices]))

    # Get the index of the most similar recipe
    similar_recipe_idx = np.argmax(output)

    # Return the most similar recipe
    return jsonify({'recommendedRecipe': df.iloc[similar_recipe_idx]['Recipe Name']})

if __name__ == "__main__":
    app.run(debug=True)
