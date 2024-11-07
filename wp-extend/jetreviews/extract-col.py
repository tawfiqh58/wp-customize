import pandas as pd

# Function to convert rating from 0-5 scale to 0-100 scale
def convert_rating(rating):
    return rating * 20

# Read the CSV file
input_file = 'yotpo.csv'
df = pd.read_csv(input_file)

# Print the first few rows of the dataframe to check the data
print("Initial data from CSV:")
print(df.head())

# Print the column names to check if "Review Type" is correctly identified
print("\nColumn names in the DataFrame:")
print(df.columns)

# Print unique values in 'Review Type' before normalization
print("\nUnique 'Review Type' values before normalization:")
print(df['Review Type'].unique())

# Normalize 'Review Type' column by stripping whitespace and converting to lowercase
df['Review Type'] = df['Review Type'].str.strip().str.lower()

# Print unique values in 'Review Type' after normalization
print("\nUnique 'Review Type' values after normalization:")
print(df['Review Type'].unique())

# Filter reviews with "Review Type" as "product_review"
filtered_df = df[df['Review Type'] == 'product_review']

# Print the filtered dataframe to check if the filter worked correctly
print("\nFiltered data (only 'product_review'):")
print(filtered_df.head())

# Check if the filtered dataframe is empty
if filtered_df.empty:
    print("\nNo data after filtering. Please check the 'Review Type' values in the input CSV.")
else:
    # Create a new DataFrame with the required columns and transformations
    output_df = pd.DataFrame({
        'source': 'post',
        'post_type': 'product',
        'post_id': filtered_df['Product ID'],
        'author': '',  # You can modify this if you have author information
        'date': filtered_df['Review Creation Date'],
        'title': filtered_df['Review Title'],
        'content': filtered_df['Review Content'],
        'type_slug': '',  # You can modify this if you have type_slug information
        'rating_data': '',  # This field is left blank as no corresponding field is provided
        'rating': filtered_df['Review Score'].apply(convert_rating),
        'likes': filtered_df['Thumbs Up'],
        'dislikes': filtered_df['Thumbs Down'],
        'approved': '',  # This field is left blank as no corresponding field is provided
        'pinned': ''  # This field is left blank as no corresponding field is provided
    })

    # Save the new DataFrame to a CSV file
    output_file = 'output_for_jetreviews.csv'
    output_df.to_csv(output_file, index=False)

    print(f'\nThe transformed data has been saved to {output_file}')
