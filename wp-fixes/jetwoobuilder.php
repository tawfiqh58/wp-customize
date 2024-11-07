// Add custom fields to the billing address
add_filter( 'woocommerce_billing_fields', 'add_custom_fields_to_billing_form' );
function add_custom_fields_to_billing_form( $fields ) {
    $fields['billing_custom_a'] = array(
        'label'     => __( 'Custom A', 'woocommerce' ),
        'placeholder'   => _x( 'Custom A', 'placeholder', 'woocommerce' ),
        'required'  => true,
        'class'     => array( 'form-row-wide' ),
        'clear'     => true
    );
    $fields['billing_custom_b'] = array(
        'label'     => __( 'Custom B', 'woocommerce' ),
        'placeholder'   => _x( 'Custom B', 'placeholder', 'woocommerce' ),
        'required'  => true,
        'class'     => array( 'form-row-wide' ),
        'clear'     => true
    );
    return $fields;
}

// Add custom fields to the shipping address
add_filter( 'woocommerce_shipping_fields', 'add_custom_fields_to_shipping_form' );
function add_custom_fields_to_shipping_form( $fields ) {
    $fields['shipping_custom_a'] = array(
        'label'     => __( 'Custom A', 'woocommerce' ),
        'placeholder'   => _x( 'Custom A', 'placeholder', 'woocommerce' ),
        'required'  => true,
        'class'     => array( 'form-row-wide' ),
        'clear'     => true
    );
    $fields['shipping_custom_b'] = array(
        'label'     => __( 'Custom B', 'woocommerce' ),
        'placeholder'   => _x( 'Custom B', 'placeholder', 'woocommerce' ),
        'required'  => true,
        'class'     => array( 'form-row-wide' ),
        'clear'     => true
    );
    return $fields;
}

// Validate the custom fields on checkout
add_action( 'woocommerce_checkout_process', 'validate_custom_fields' );
function validate_custom_fields() {
    if ( ! $_POST['billing_custom_a'] ) {
        wc_add_notice( __( 'Please enter a value for Custom A' ), 'error' );
    }
    if ( ! $_POST['billing_custom_b'] ) {
        wc_add_notice( __( 'Please enter a value for Custom B' ), 'error' );
    }
    if ( ! $_POST['shipping_custom_a'] ) {
        wc_add_notice( __( 'Please enter a value for Custom A' ), 'error' );
    }
    if ( ! $_POST['shipping_custom_b'] ) {
        wc_add_notice( __( 'Please enter a value for Custom B' ), 'error' );
}
}

// Save the custom fields as order meta
add_action( 'woocommerce_checkout_update_order_meta', 'save_custom_fields_as_order_meta' );
function save_custom_fields_as_order_meta( $order_id ) {
	if ( ! empty( $_POST['billing_custom_a'] ) ) {
	update_post_meta( $order_id, 'billing_custom_a', sanitize_text_field( $_POST['billing_custom_a'] ) );
	}
	if ( ! empty( $_POST['billing_custom_b'] ) ) {
	update_post_meta( $order_id, 'billing_custom_b', sanitize_text_field( $_POST['billing_custom_b'] ) );
	}
	if ( ! empty( $_POST['shipping_custom_a'] ) ) {
	update_post_meta( $order_id, 'shipping_custom_a', sanitize_text_field( $_POST['shipping_custom_a'] ) );
	}
	if ( ! empty( $_POST['shipping_custom_b'] ) ) {
	update_post_meta( $order_id, 'shipping_custom_b', sanitize_text_field( $_POST['shipping_custom_b'] ) );
}
}

REMOVE FIELD FROM CHECKOUT BILLING / SHIPPING ADDRESS
---------------------------------------
/*remove fields from checkout billing and shipping address */
function remove_checkout_details_fields( $fields ) {
    unset($fields['billing']['billing_first_name']);
    unset($fields['billing']['billing_last_name']);
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_address_1']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_city']);
    unset($fields['billing']['billing_postcode']);
    unset($fields['billing']['billing_country']);
    unset($fields['billing']['billing_state']);
    unset($fields['billing']['billing_phone']);
    unset($fields['billing']['billing_email']);
   
    /*for shipping fields */ 
    unset($fields['shipping']['shipping_first_name']);    
    unset($fields['shipping']['shipping_last_name']);  
    unset($fields['shipping']['shipping_company']);
    unset($fields['shipping']['shipping_address_1']);
    unset($fields['shipping']['shipping_address_2']);
    unset($fields['shipping']['shipping_city']);
    unset($fields['shipping']['shipping_postcode']);
    unset($fields['shipping']['shipping_country']);
    unset($fields['shipping']['shipping_state']);
    /*shipping fields end */

    return $fields;
}
add_filter( 'woocommerce_checkout_fields' , 'remove_checkout_details_fields' );

---------

/*hiding shipping address */
add_filter( 'woocommerce_cart_needs_shipping_address', '__return_false');
