// Print Product IDs to the DOM
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

<!-- past the code to function.php file &
    use the shortcode widget and past: [cart_product_ids]  -->