<?php
// Name
add_action('woocommerce_after_checkout_billing_form', 'custom_checkout_field');
function custom_checkout_field($checkout)
{
    echo '<div id="custom_checkout_name_field">';
    woocommerce_form_field('checkout_name_field', array('type' => 'text', 'required' => 'true', 'class' => array('my-field-class form-row-wide'), 'label' => __('Name'), 'maxlength' => 16, 'placeholder' => __('Example: Bob'),), $checkout->get_value('checkout_name_field'));
    echo '<p>(Within 16 Character)</p></div>';
}

add_action('woocommerce_checkout_process', 'customised_checkout_field_process');
function customised_checkout_field_process()
{
    // Error message if the field is not set
    if (!$_POST['checkout_name_field']) wc_add_notice(__('Name Field is a Required Field!'), 'error');
}

add_action('woocommerce_checkout_update_order_meta', 'custom_checkout_field_update_order_meta');
function custom_checkout_field_update_order_meta($order_id)
{
    if (!empty($_POST['checkout_name_field']) || strlen($_POST['checkout_name_field']) > 16) {
        update_post_meta($order_id, 'Name Field', sanitize_text_field($_POST['checkout_name_field']));
    }
}

add_action('woocommerce_admin_order_data_after_billing_address', 'custom_checkout_field_display_admin_order_meta', 10, 1);
function custom_checkout_field_display_admin_order_meta($order)
{
    echo '<p><strong>' . __('Name Field') . ':</strong> ' . get_post_meta($order->get_id(), 'Name Field', true) . '</p>';
}

add_filter('manage_edit-shop_order_columns', 'custom_checkout_field_add_order_column');
function custom_checkout_field_add_order_column($columns)
{
    $new_columns = (is_array($columns)) ? $columns : array();
    $new_columns['checkout_name_field'] = __('Name Field');
    return $new_columns;
}

add_action('manage_shop_order_posts_custom_column', 'custom_checkout_field_add_order_column_content');
function custom_checkout_field_add_order_column_content($column)
{
    global $post;
    if ($column == 'checkout_name_field') {
        echo get_post_meta($post->ID, 'Name Field', true);
    }
}
