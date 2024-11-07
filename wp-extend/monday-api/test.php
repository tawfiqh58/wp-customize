<?php
$token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMjAwNjM4NywiYWFpIjoxMSwidWlkIjo1MzAzODUyNCwiaWFkIjoiMjAyMy0xMi0xMVQxNDozMzo0Ny4zNTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzcyNDAsInJnbiI6ImV1YzEifQ.5uAbjJhu2OicO5hzOWBekwOmf1JTdZ5c9cyRLtWtubY';
$apiUrl = 'https://api.monday.com/v2';
$headers = ['Content-Type: application/json', 'Authorization: ' . $token];

$query = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:1340625163, item_name:$myItemName, column_values:$columnVals) { id } }';
$vars = ['myItemName' => 'Hello world!', 
  'columnVals' => json_encode([
    'status' => 'Gestoppt', 
    'datum' => '1993-08-27',
	'text' => 'Mediapantheon',
	'text6' => 'dev@mediapantheon.com',
	'text0' => 'Houston, USA'
])];

$data = @file_get_contents($apiUrl, false, stream_context_create([
 'http' => [
 'method' => 'POST',
 'header' => $headers,
 'content' => json_encode(['query' => $query, 'variables' => $vars]),
 ]
]));
$responseContent = json_decode($data, true);

echo json_encode($responseContent);
?>