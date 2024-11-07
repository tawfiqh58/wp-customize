let query3 = 'mutation{ create_item (board_id:YOUR_BOARD_ID_HERE, item_name:\"WHAT IS UP MY FRIENDS!\") { id } }';

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'YOUR_API_KEY_HERE'
  },
  body: JSON.stringify({
    'query' : query3
  })
})
  .then(res => res.json())
  .then(res => console.log(JSON.stringify(res, null, 2)));