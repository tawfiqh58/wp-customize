<?
add_action( 'jet-form-builder/custom-action/monday-api', function( $record, $handler ) {
    $api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMTg3MTUzMiwiYWFpIjoxMSwidWlkIjo1MzAzMjQzOCwiaWFkIjoiMjAyMy0xMi0xMVQwMjoxNjozOS4xNzVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzQ5NTIsInJnbiI6ImFwc2UyIn0.lFxYGmd1s_IxyR1hiJWJIqlnhZRF5Gpjt4QX8b1_eko';
    $board_id = '1831631639';
    $url = "https://api.monday.com/v2/boards/{$board_id}/items";

    $args = array(
        'headers' => array(
            'Authorization' => $api_key,
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode( array(
            'name' => $record->get_field( 'name' ),
            'email' => $record->get_field( 'email' ),
            'phone' => $record->get_field( 'phone' )
        ) )
    );

    $response = wp_remote_post( $url, $args );

    if ( is_wp_error( $response ) ) {
        error_log( $response->get_error_message() );
    } else {
        console_log( 'Data submitted successfully.' );
    }
} );


