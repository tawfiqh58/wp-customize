<?php
function dynamic_webhook_post_submit($record) { 
	$provider = $record;
	//$provider_id = $record['appointment_date_new']['provider'];
    //echo '' . json_encode($provider['appointment_date']) . ''; worked
// 	$type = gettype($provider['appointment_date']); worked
// echo "The type of \$provider['appointment_date'] is: " . $type; worked

$appointment_date_string = $provider['appointment_date'];
$appointment_data_array = json_decode($appointment_date_string, true);
$appointment_data = $appointment_data_array[0];
$provider_id = $appointment_data['provider']; 
$webhook_url = get_post_meta($provider_id, 'webhooks-url', true);
// echo '<script>console.log("provider_id:", ' . json_encode($webhook_url) . ');</script>';  
echo json_encode($webhook_url);
}