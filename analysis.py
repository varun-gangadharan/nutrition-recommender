import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from create_df import create_df
import numpy as np

df = create_df()

# Assuming df is your DataFrame
# df = pd.read_your_data()

# Convert nutritional values to numeric for analysis
df['calories'] = pd.to_numeric(df['calories'], errors='coerce')
df['carbs'] = pd.to_numeric(df['carbs'].str.replace('g', ''), errors='coerce')
df['fat'] = pd.to_numeric(df['fat'].str.replace('g', ''), errors='coerce')
df['protein'] = pd.to_numeric(df['protein'].str.replace('g', ''), errors='coerce')

# 1. Exploratory Data Analysis (EDA)
# Plotting distribution of nutrients
df[['calories', 'carbs', 'fat', 'protein']].hist(bins=10, figsize=(15, 10))
plt.tight_layout()
plt.show()

# 2. User Preference Analysis
# Analyzing most common ingredients
df['missedIngredients'] = df['missedIngredients'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
df['usedIngredients'] = df['usedIngredients'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])


# Get a Series of all ingredients
all_ingredients = df['missedIngredients'].sum() + df['usedIngredients'].sum()

# Count the occurrence of each ingredient
ingredient_counts = pd.Series(all_ingredients).value_counts()

# Show top 10 ingredients
print(ingredient_counts[:10])

# 3. Correlation Analysis
# Compute the correlation matrix
corr = df[['calories', 'carbs', 'fat', 'protein']].corr()

# Generate a mask for the upper triangle
mask = np.triu(np.ones_like(corr, dtype=bool))

# Set up the matplotlib figure
f, ax = plt.subplots(figsize=(11, 9))

# Generate a custom diverging colormap
cmap = sns.diverging_palette(230, 20, as_cmap=True)

# Draw the heatmap with the mask and correct aspect ratio
sns.heatmap(corr, mask=mask, cmap=cmap, vmax=.3, center=0,
            square=True, linewidths=.5, cbar_kws={"shrink": .5})
plt.show()

