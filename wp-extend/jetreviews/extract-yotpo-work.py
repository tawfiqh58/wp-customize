import pandas as pd

# Function to convert rating from 0-5 scale to 0-100 scale
def convert_rating(rating):
    return rating * 20

input_file = 'yotpo.csv'
df = pd.read_csv(input_file)

print("Initial data from CSV:")
print(df.head())

df['Review Type'] = df['Review Creation Date'].str.strip().str.lower()

filtered_df = df[df['Review Type'] == 'product_review']

print("\nFiltered data (only 'product_review'):")
print(filtered_df.head())

if filtered_df.empty:
    print("\nNo data after filtering. Please check the 'Review Type' values in the input CSV.")
else:
    output_df = pd.DataFrame({
        'source': 'post',
        'post_type': 'product',
        'post_id': filtered_df['Reviewer Device Type'],
        'author': '',
        'date': filtered_df['Review ID'],
        'title': filtered_df['Review Score'],
        'content': filtered_df['Review Title'],
        'type_slug': '',
        'rating_data': '',
        'rating': filtered_df['Review Source'].apply(convert_rating),
        'likes': filtered_df['Review Tags'],
        'dislikes': filtered_df['Thumbs Up'],
        'approved': 1,
        'pinned': 0
    })

    output_file = 'output_for_jetreviews.csv'
    output_df.to_csv(output_file, index=False)

    print(f'\nThe transformed data has been saved to {output_file}')
