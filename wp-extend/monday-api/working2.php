<?
function name_it($record) {
    $api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMTg3MTUzMiwiYWFpIjoxMSwidWlkIjo1MzAzMjQzOCwiaWFkIjoiMjAyMy0xMi0xMVQwMjoxNjozOS4xNzVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzQ5NTIsInJnbiI6ImFwc2UyIn0.lFxYGmd1s_IxyR1hiJWJIqlnhZRF5Gpjt4QX8b1_eko';
    $board_id = '1831631639';
    $url = 'https://api.monday.com/v2';

    $query = 'mutation { create_item (board_id: ' . $board_id . ', item_name: "' . $record['name'] . '", column_values: "{\"email\": \"' . $record['email'] . '\", \"language\": \"' . $record['language'] . '\", \"start_time\": \"' . $record['start_time'] . '\", \"license_type\": \"' . $record['license_type'] . '\", \"address\": \"' . $record['address'] . '\", \"terms\": \"' . $record['terms'] . '\"}") { id } }';
    
    $args = array(
        'headers' => array(
            'Authorization' => $api_key,
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode( array(
            'query' => $query
        ) )
    );

    $response = wp_remote_post( $url, $args );

    if ( is_wp_error( $response ) ) {
        error_log( $response->get_error_message() );
    } else {
        error_log( 'Data submitted successfully.' );
    }
}
add_action('jet-form-builder/custom-action/api-test', 'name_it');