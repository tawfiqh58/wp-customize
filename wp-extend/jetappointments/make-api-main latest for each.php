<?php
function dynamic_webhook_post_submit($record) {
$appointments_data = json_decode($record['appointment_date'], true);

foreach ($appointments_data as $appointment) {
    $provider_id = $appointment['provider'];
    $webhook_url = get_post_meta($provider_id, 'webhooks-url', true);

    if (empty($webhook_url)) {
        continue;
    }

    $new_record = $record; // shallow copy
    unset($new_record['appointment_date']); 

    $new_record['appointment_info'] = $appointment;

    $args = [
        'headers' => [
            'Content-Type' => 'application/json'
        ],
        'body' => json_encode($new_record) 
    ];

    $response = wp_remote_post($webhook_url, $args);

    if (is_wp_error($response)) {
        error_log($response->get_error_message());
    } else {
        $responseContent = json_decode(wp_remote_get_body($response), true);
        echo json_encode($responseContent);
    }
}
}

add_action('jet-form-builder/custom-action/dynamic-webhook', 'dynamic_webhook_post_submit'); 
