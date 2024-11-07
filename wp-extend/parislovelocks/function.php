
// Names & Date
add_action('woocommerce_after_checkout_billing_form', 'custom_checkout_field');
function custom_checkout_field($checkout) {
	echo '<br/><hr/><br/><h3>Provide Details (Required)</h3>';
    echo '<div id="custom_checkout_names_field">';
    woocommerce_form_field('checkout_name_field', array('type' => 'text', 'required' => 'true', 'class' => array('my-field-class form-row-wide'), 'label' => __('NAMES'), 'maxlength' => 16, 'placeholder' => __('Example: Naïm & Alice.'),), $checkout->get_value('checkout_name_field'));
    echo '<p>(Within 16 Character)</p></div>';

    echo '<div id="custom_checkout_date_field">';
    woocommerce_form_field('custom_date_field', array('type' => 'text', 'required' => 'true', 'class' => array('my-field-class form-row-wide'), 'label' => __('DATE'), 'maxlength' => 15, 'placeholder' => __('Enter a Date'),), $checkout->get_value('custom_date_field'));
    echo '<p>(Within 15 Character)</p></div>';
}

add_action('woocommerce_checkout_process', 'customised_checkout_field_process');
function customised_checkout_field_process() {
    // Error message if the field is not set
    if (!$_POST['checkout_name_field']) wc_add_notice(__('Names field is a required Field!'), 'error');
    if (!$_POST['custom_date_field']) wc_add_notice(__('Date field is a required Field!'), 'error');
}

add_action('woocommerce_checkout_update_order_meta', 'custom_checkout_field_update_order_meta');
function custom_checkout_field_update_order_meta($order_id) {
    if (!empty($_POST['checkout_name_field']) || strlen($_POST['checkout_name_field']) > 16) {
        update_post_meta($order_id, 'Names Field', sanitize_text_field($_POST['checkout_name_field']));
    }
    if (!empty($_POST['custom_date_field']) || strlen($_POST['custom_date_field']) > 15) {
        update_post_meta($order_id, 'Date Field', sanitize_text_field($_POST['custom_date_field']));
    }
}

add_action('woocommerce_admin_order_data_after_billing_address', 'custom_checkout_field_display_admin_order_meta', 10, 1);
function custom_checkout_field_display_admin_order_meta($order){
    echo '<p><strong>'.__('Names Field').':</strong> ' . get_post_meta( $order->get_id(), 'Names Field', true ) . '</p>';
    echo '<p><strong>'.__('Date Field').':</strong> ' . get_post_meta( $order->get_id(), 'Date Field', true ) . '</p>';
}

add_filter('manage_edit-shop_order_columns', 'custom_checkout_field_add_order_column');
function custom_checkout_field_add_order_column($columns){
    $new_columns = (is_array($columns)) ? $columns : array();
    $new_columns['checkout_name_field'] = __('Names Field');
    $new_columns['custom_date_field'] = __('Date Field');
    return $new_columns;
}

add_action('manage_shop_order_posts_custom_column', 'custom_checkout_field_add_order_column_content');
function custom_checkout_field_add_order_column_content($column){
    global $post;
    if ($column == 'checkout_name_field'){
        echo get_post_meta($post->ID, 'Names Field', true);
    }
    if ($column == 'custom_date_field'){
        echo get_post_meta($post->ID, 'Date Field', true);
    }
}

function display_cart_product_ids() {
    if ( ! WC()->cart->is_empty() ) {
        $output = 'Product IDs: ';
        foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
            $product_id = $cart_item['product_id'];
            $output .= $product_id . ', ';
        }
        return rtrim( $output, ', ' ); // Remove trailing comma
    } else {
        return 'Cart is empty';
    }
}
add_shortcode( 'cart_product_ids', 'display_cart_product_ids' );