import pandas as pd



def transform_review_data(review, users_df):
  reviewer_display_name = review['Pushed to Social']
  reviewer_email = review['Reviewer Display Name']
  
  user_match = users_df[(users_df['display_name'] == reviewer_display_name) | (users_df['user_email'] == reviewer_email)]
  
  user_id = ''
  if not user_match.empty:
      user_id = user_match.iloc[0]['source_user_id']
  
  return pd.DataFrame({
      'post_id': review['Reviewer Device Type'],
      'author': user_id,
  }, index=[0])  # Add index to avoid overwriting

df = pd.read_csv('reviews.csv')
users_df = pd.read_csv('users.csv')

print("Initial data from CSV:")
print(df.head())

df['Review Type'] = df['Review Creation Date'].str.strip().str.lower()

filtered_df = df[df['Review Type'] == 'product_review']

print("\nFiltered data (only 'product_review'):")
print(filtered_df.head())

# Initialize an empty DataFrame to store the transformed data
output_df = pd.DataFrame()

if not filtered_df.empty:
  # Process each review using a function for better organization
  output_df = filtered_df.apply(transform_review_data, axis=1, users_df=users_df)
  # Concatenate all resulting DataFrames into output_df
  output_df = pd.concat(output_df, ignore_index=True)

output_file = 'output_for_jetreviews.csv'
output_df.to_csv(output_file, index=False)

print(f'\nThe transformed data has been saved to {output_file}')
