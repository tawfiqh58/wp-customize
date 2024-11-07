function display_filtered_results_range() {
global $wp_query;

// Get the current page
$paged = max( 1, get_query_var('paged') );

// Get the number of products per page
$posts_per_page = $wp_query->query_vars['posts_per_page'];

// Get the total number of products (filtered or not)
$total_products = $wp_query->found_posts;

// Calculate first and last product for current page
$first_item = ( $posts_per_page * ( $paged - 1 ) ) + 1;
$last_item = min( $total_products, $posts_per_page * $paged );

// Output the product count range
if ( $total_products > 0 ) {
echo "<p id='results-range'>Showing {$first_item}–{$last_item} of {$total_products} results</p>";
} else {
echo "<p id='results-range'>No products found.</p>";
}
}


function display_filtered_results_range_shortcode() {
ob_start();
display_filtered_results_range();
return ob_get_clean();
}
add_shortcode('filtered_results_range', 'display_filtered_results_range_shortcode');