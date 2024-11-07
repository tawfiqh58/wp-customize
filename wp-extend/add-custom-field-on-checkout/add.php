<?php

// Add a custom field to the checkout page
add_action('woocommerce_after_order_notes', 'custom_checkout_field');
function custom_checkout_field($checkout) {
    echo '<div id="custom_checkout_field">
    <h3>' . __('Please Provide The Custom Data') . '</h3>';
    woocommerce_form_field('custom_field', array('type' => 'text', 'required' => 'true', 'class' => array('my-field-class form-row-wide'), 'label' => __('Custom Field'), 'placeholder' => __('Enter Custom Data'),), $checkout->get_value('custom_field'));
    echo '
</div>';
}

// Validate Checkout field
add_action('woocommerce_checkout_process', 'customised_checkout_field_process');
function customised_checkout_field_process() {
    // Error message if the field is not set
    if (!$_POST['custom_field']) wc_add_notice(__('Custom Field is a Required Field!'), 'error');
}

// Update the value given in custom field
add_action('woocommerce_checkout_update_order_meta', 'custom_checkout_field_update_order_meta');
function custom_checkout_field_update_order_meta($order_id) {
    if (!empty($_POST['custom_field'])) {
        update_post_meta($order_id, 'Custom Field', sanitize_text_field($_POST['custom_field']));
    }
}


// Add custom field to the order details meta box in admin
add_action('woocommerce_admin_order_data_after_billing_address', 'custom_checkout_field_display_admin_order_meta', 10, 1);
function custom_checkout_field_display_admin_order_meta($order){
    echo '<p><strong>'.__('Custom Field').':</strong> ' . get_post_meta( $order->get_id(), 'Custom Field', true ) . '</p>';
}

// Add custom field to the order list table in admin
add_filter('manage_edit-shop_order_columns', 'custom_checkout_field_add_order_column');
function custom_checkout_field_add_order_column($columns){
    $new_columns = (is_array($columns)) ? $columns : array();
    $new_columns['custom_field'] = __('Custom Field');
    return $new_columns;
}

add_action('manage_shop_order_posts_custom_column', 'custom_checkout_field_add_order_column_content');
function custom_checkout_field_add_order_column_content($column){
    global $post;
    if ($column == 'custom_field'){
        echo get_post_meta($post->ID, 'Custom Field', true);
    }
}