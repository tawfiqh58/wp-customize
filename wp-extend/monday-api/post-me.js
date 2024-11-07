
let query5 = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:1340625163, item_name:$myItemName, column_values:$columnVals) { id } }';
let vars = {
  "myItemName" : "Hello, world!",
  "columnVals" : JSON.stringify({
    "status" : "Erledigt",
    "datum" : "1993-08-27"
  })
};

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMjAwNjM4NywiYWFpIjoxMSwidWlkIjo1MzAzODUyNCwiaWFkIjoiMjAyMy0xMi0xMVQxNDozMzo0Ny4zNTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzcyNDAsInJnbiI6ImV1YzEifQ.5uAbjJhu2OicO5hzOWBekwOmf1JTdZ5c9cyRLtWtubY'
  },
  body: JSON.stringify({
    'query' : query5,
    'variables' : JSON.stringify(vars)
  })
})
  .then(res => res.json())
  .then(res => console.log(JSON.stringify(res, null, 2)));