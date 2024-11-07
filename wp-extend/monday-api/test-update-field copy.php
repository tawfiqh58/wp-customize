<?php 
function monday_api_post_submit($record) {
$token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMjAwNjM4NywiYWFpIjoxMSwidWlkIjo1MzAzODUyNCwiaWFkIjoiMjAyMy0xMi0xMVQxNDozMzo0Ny4zNTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzcyNDAsInJnbiI6ImV1YzEifQ.5uAbjJhu2OicO5hzOWBekwOmf1JTdZ5c9cyRLtWtubY';
$apiUrl = 'https://api.monday.com/v2';
$headers = ['Content-Type: application/json', 'Authorization: ' . $token];

$query = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:1340625163, item_name:$myItemName, column_values:$columnVals) { id } }';
$vars = ['myItemName' => $record['firstname'],
  'columnVals' => json_encode([
	'text6' => $record['email'],
	'text' => $record['firstname'],
	'text56' => $record['lastname'],
	'text4' => $record['phone'],
	'text2' => $record['has95'],
	'text02' => $record['language_input'],
	'text0' => $record['address'],
	'text5' => $record['language'],
	'text66' => $record['start_time'],
	'text8' => $record['license_type'],
	'text1' => $record['terms']
])];

$data = @file_get_contents($apiUrl, false, stream_context_create([
 'http' => [
 'method' => 'POST',
 'header' => $headers,
 'content' => json_encode(['query' => $query, 'variables' => $vars]),
 ]
]));
	
}

add_action('jet-form-builder/custom-action/monday-api', 'monday_api_post_submit');