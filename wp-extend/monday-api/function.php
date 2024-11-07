<?
add_action( 'elementor_pro/forms/new_record', function( $record, $handler ) {
    $api_key = 'your_api_key_here';
    $board_id = 'your_board_id_here';
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
        error_log( 'Data submitted successfully.' );
    }
} );


