import pandas as pd

# Load CSV files
users_df = pd.read_csv('users.csv')
reviews_df = pd.read_csv('reviews.csv')

# Initialize a new dataframe to store matched user IDs
matched_user_ids = []
unmatched_users = []

i = 0
# Iterate through each row in reviews dataframe
for index, review in reviews_df.iterrows():
    reviewer_display_name = review['Pushed to Social']
    reviewer_email = review['Reviewer Display Name']
    
    # Find user in users dataframe based on display name or email
    user_match = users_df[(users_df['display_name'] == reviewer_display_name) | (users_df['user_email'] == reviewer_email)]
    
    # reviewer_display_name = review['Pushed to Social'].strip().lower()  # Convert to lowercase and remove extra spaces
    # reviewer_email = review['Reviewer Display Name'].strip().lower()  # Convert to lowercase and remove extra spaces
    
    # # Find user in users dataframe based on display name or email (using case-insensitive matching and ignoring extra spaces)
    # user_match = users_df[(users_df['display_name'].str.strip().str.lower() == reviewer_display_name) | (users_df['user_email'].str.strip().str.lower() == reviewer_email)]

    # If a match is found, retrieve user ID and add it to matched_user_ids dataframe
    if not user_match.empty:
        user_id = user_match.iloc[0]['source_user_id']  # Assuming 'user_id' is the column name in users CSV
        matched_user_ids.append({'Reviewer Display Name': reviewer_display_name, 'Reviewer Email': reviewer_email, 'User ID': user_id})
        i=i+1;
    else:
        unmatched_users.append({'Reviewer Display Name': review['Pushed to Social'], 'Reviewer Email': review['Reviewer Display Name']})

print(i);
matched_user_ids_df = pd.DataFrame(matched_user_ids)
matched_user_ids_df.to_csv('matched_user_ids.csv', index=False)

unmatched_users_df = pd.DataFrame(unmatched_users)
unmatched_users_df.to_csv('unmatched_users.csv', index=False)
