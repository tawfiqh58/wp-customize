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

    $headers = ['Content-Type: application/json'];
    $data = @file_get_contents($webhook_url, false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => $headers,
            'content' => json_encode($record), // Send the entire $record
        ]
    ]));
    $responseContent = json_decode($data, true);

    echo json_encode($responseContent);
}

add_action('jet-form-builder/custom-action/dynamic-webhook', 'dynamic_webhook_post_submit'); 
