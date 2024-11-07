import pandas as pd

# Function to convert rating from 0-5 scale to 0-100 scale
def convert_rating(rating):
    return rating * 20

# Read the CSV file
input_file = 'users.csv'
df = pd.read_csv(input_file)

# Print the first few rows of the dataframe to check the data
print("Initial data from CSV:")
print(df.head())

# Print the column names to check if "Review Type" is correctly identified
print("\nColumn names in the DataFrame:")
print(df.columns)

# Print the 'Review Type' column to check its content
print("\nContent of 'Review Type' column:")
print(df['user_email'].head(10))