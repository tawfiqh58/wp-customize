
<?php
/**
 * 'api-request' - is a customm hook name
 */
add_action( 'jet-form-builder/custom-action/api-request', function( $request, $action_handler ) {
	
	$post_id = ! empty( $request['inserted_post_id'] ) ? $request['inserted_post_id'] : false;
    echo $post_id;
	if ( ! $post_id ) {
		return;
	}

	$response = wp_remote_get( 'https://fakerapi.it/api/v1/companies?_quantity=1' );
	$body = wp_remote_retrieve_body( $response );
	$body = json_decode( $body, true );

	if ( $body ) {
		$data = $body['data'][0];
		update_post_meta( $post_id, 'api-response', $data['name'] );
	}

	$redirect = get_permalink( $post_id );

	if ( ! $request['__is_ajax'] ) {
		wp_safe_redirect( $redirect );
		die();
	} else {
		$action_handler->response_data['redirect'] = $redirect;
	}

}, 10, 2 );

//https://gist.github.com/girafffee/175a1c13a70d3a52aeb0600154a6fc02
use Jet_Form_Builder\Exceptions\Action_Exception;

add_action( 'jet-form-builder/custom-action/test_action', function ( $request, $handler ) {
    if ( empty( $request['age'] ) ) {
        /**
         * You can use one of the default statuses
         * 'success' => 'Form successfully submitted.',
         * 'failed' => 'There was an error trying to submit form. Please try again later.',
         * 'validation_failed' => 'One or more fields have an error. Please check and try again.',
         * 'captcha_failed' => 'Captcha validation failed',
         * 'invalid_email' => 'The e-mail address entered is invalid.',
         * 'empty_field' => 'The field is required.',
         * 'internal_error' => 'Internal server error. Please try again later.',
         * 'upload_max_files' => 'Maximum upload files limit is reached.',
         * 'upload_max_size' => 'Upload max size exceeded.',
         * 'upload_mime_types' => 'File type is not allowed.',
         */
        throw new Action_Exception( 'empty_field' );
    }

    if ( absint( $request['age'] ) < 18 ) {
        throw ( new Action_Exception( 'Your age is less than necessary' ) )->dynamic_error();
    }

    /**
     * If all checks are passed, you just need to do Nothing,
     * so that the form would continue its work or successfully complete it.
     *
     * In rare cases, you can interrupt the execution of the form with a successful status.
     */
    if ( 199 === absint( $request['age'] ) ) {
        // or throw new Action_Exception( 'success' );
        throw ( new Action_Exception( 'Lucky!' ) )->dynamic_success();
    }

}, 10, 2 );


//Example of custom hook with API request and redirect.  https://gist.github.com/MjHead/6771eaba3adfe250378b4408878e75c5
add_action( 'jet-form-builder/custom-action/api-request', function( $request, $action_handler ) {
    
    $post_id = ! empty( $request['inserted_post_id'] ) ? $request['inserted_post_id'] : false;

    if ( ! $post_id ) {
        return;
    }

    $response = wp_remote_get( 'https://fakerapi.it/api/v1/companies?_quantity=1' );
    $body = wp_remote_retrieve_body( $response );
    $body = json_decode( $body, true );

    if ( $body ) {
        $data = $body['data'][0];
        update_post_meta( $post_id, 'api-response', $data['name'] );
    }

    $redirect = get_permalink( $post_id );

    if ( ! $request['__is_ajax'] ) {
        wp_safe_redirect( $redirect );
        die();
    } else {
        $action_handler->response_data['redirect'] = $redirect;
    }

}, 10, 2 );