let query3 = { item_name: "WHAT IS UP MY FRIENDS!" };

fetch (`https://api.monday.com/v2/boards/1831631639/items`, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMTg3MTUzMiwiYWFpIjoxMSwidWlkIjo1MzAzMjQzOCwiaWFkIjoiMjAyMy0xMi0xMVQwMjoxNjozOS4xNzVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzQ5NTIsInJnbiI6ImFwc2UyIn0.lFxYGmd1s_IxyR1hiJWJIqlnhZRF5Gpjt4QX8b1_eko'
  },
  body: JSON.stringify(query3)
})
  .then(res => res.json())
  .then(res => console.log(JSON.stringify(res, null, 2)));