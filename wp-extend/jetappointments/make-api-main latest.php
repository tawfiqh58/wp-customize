<?php
function dynamic_webhook_post_submit($record) {
    // Extract the Provider ID
    $appointment_date_string = $record['appointment_date'];
    $appointment_data_array = json_decode($appointment_date_string, true);
    $appointment_data = $appointment_data_array[0];
    $provider_id = $appointment_data['provider']; 


    // Fetch the dynamic webhook URL
    $webhook_url = get_post_meta($provider_id, 'webhooks-url', true);

    if (empty($webhook_url)) {
      return; 
    }

     // Modify $record as an object
     $record['appointment_date'] = json_decode($record['appointment_date'], true); 

     $args = [
         'headers' => [
             'Content-Type' => 'application/json'
         ],
         'body' => json_encode($record) 
     ];
     $response = wp_remote_post($webhook_url, $args);

     if (is_wp_error($response)) {
         error_log($response->get_error_message());
     } else {
         $responseContent = json_decode(wp_remote_get_body($response), true);
         echo json_encode($responseContent);
     }
}

add_action('jet-form-builder/custom-action/dynamic-webhook', 'dynamic_webhook_post_submit'); 
