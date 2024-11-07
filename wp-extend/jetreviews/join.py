import pandas as pd

def convert_rating(rating):
    return rating * 20

def convert_rating_data(rating):
    rating_data = {
        'field_label': 'Rating',
        'field_value': rating,
        'field_step': 1,
        'field_max': 5
    }
    return serialize_php_array(rating_data)

def serialize_php_array(data):
    serialized_array = "a:" + str(len(data)) + ":{"
    for key, value in data.items():
        serialized_array += "s:" + str(len(key)) + ":\"" + key + "\";"
        if isinstance(value, int):
            serialized_array += "i:" + str(value) + ";"
        elif isinstance(value, str):
            serialized_array += "s:" + str(len(value)) + ":\"" + value + "\";"
    serialized_array += "}"
    return serialized_array

df = pd.read_csv('reviews.csv')
users_df = pd.read_csv('users.csv')

print("Initial data from CSV:")
print(df.head())

df['Review Type'] = df['Review Creation Date'].str.strip().str.lower()

filtered_df = df[df['Review Type'] == 'product_review']

print("\nFiltered data (only 'product_review'):")
print(filtered_df.head())

if filtered_df.empty:
    print("\nNo data after filtering. Please check the 'Review Type' values in the input CSV.")
else:
    processed_reviews = []
    for index, review in filtered_df.iterrows():
        reviewer_display_name = review['Pushed to Social']
        reviewer_email = review['Reviewer Display Name']
        
        user_match = users_df[(users_df['display_name'] == reviewer_display_name) | (users_df['user_email'] == reviewer_email)]
        
        user_id = ''
        if not user_match.empty:
            user_id = user_match.iloc[0]['source_user_id']
            
        review_obj = {
            'source': 'post',
            'post_type': 'product',
            'post_id': review['Reviewer Device Type'],
            'author': user_id,
            'date': review['Review ID'],
            'title': review['Review Score'],
            'content': review['Review Title'],
            'type_slug': '',
            'rating_data': convert_rating_data(review['Review Score']),
            'rating': convert_rating(review['Review Source']),
            'likes': review['Review Tags'],
            'dislikes': review['Thumbs Up'],
            'approved': 1,
            'pinned': 0
        }

        processed_reviews.append(review_obj)
        
    processed_reviews_df = pd.DataFrame(processed_reviews)
    processed_reviews_df.to_csv("processed_reviews.csv", index=False)
    print("\nProcessed reviews exported to processed_reviews.csv")