add_action( 'jet-form-builder/custom-action/monday-api', function( $record, $handler ) {
    $api_key = 'your_api_key_here';
    $board_id = 'your_board_id_here';
    $url = 'https://api.monday.com/v2';

    $query = 'mutation { create_item (board_id: ' . $board_id . ', item_name: "' . $record->get_field( 'name' ) . '") { id } }';

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
} );
