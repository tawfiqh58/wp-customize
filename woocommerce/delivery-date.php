/**
 * Snippet Name:	WooCommerce Estimated Delivery Dates For Shipping Methods
 * Snippet Author:	ecommercehints.com
 * https://www.youtube.com/watch?v=JihnIX-PCio
 */

// Create a filter for each shipping method
add_action( 'init', 'ecommercehints_init', 100 );
function ecommercehints_init() {
	$shipping_methods = WC()->shipping->get_shipping_methods();
	foreach ( $shipping_methods as $id => $shipping_method ) {
		add_filter( "woocommerce_shipping_instance_form_fields_$id", 'ecommercehints_create_shipping_method_days_field' );
	}
}

// Create a custom field in shipping method editor named "days" and identify where it will be shown
function ecommercehints_create_shipping_method_days_field( $fields ) {
	$new_fields = array(
		'days' => array(
			'title' => 'Days to arrive',
			'type'  => 'number',
			'desc_tip' => 'The number of days the order will take to arrive with this shipping method.'
		),
	);
	$keys  = array_keys( $fields );
	$index = array_search( 'title', $keys, true );
	$pos   = false === $index ? count( $fields ) : $index + 1;
	return array_merge( array_slice( $fields, 0, $pos ), $new_fields, array_slice( $fields, $pos ) );
}

// Create the days field as meta
add_filter( 'woocommerce_shipping_method_add_rate_args', 'ecommercehints_create_days_as_meta', 10, 2 );
function ecommercehints_create_days_as_meta( $args, $method ) {
	$args['meta_data']['days'] = htmlentities( $method->get_option( 'days' ) );
	return $args;
}

// Calculate the estimated delivery date by adding the number of days to the current date
add_action( 'woocommerce_after_shipping_rate', 'ecommercehints_output_shipping_method_tooltips', 10 );
function ecommercehints_output_shipping_method_tooltips( $method ) {
	$meta_data = $method->get_meta_data();
	if ( array_key_exists( 'days', $meta_data ) ) {
		$days = apply_filters( 'ecommercehints_days_output', html_entity_decode( $meta_data['days'] ), $method );
		if ($days) {
			$current_date = date (get_option( 'date_format' ), strtotime("+" . $days . " days"));
			$html = '<div class="ecommercehints_est_delivery"><small>Estimated Delivery Date: ' . $current_date . '</small></div>';
			echo apply_filters( 'ecommercehints_days_output_html', $html, $days, $method  );
		}
	}
}
