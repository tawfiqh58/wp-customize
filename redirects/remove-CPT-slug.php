function custom_rewrite_rules() {
    add_rewrite_rule('^([^/]+)?$', 'index.php?example=$matches[1]', 'top');
}
add_action('init', 'custom_rewrite_rules', 10, 0);

function custom_post_type_link($post_link, $post) {
    if ($post->post_type === 'example' && $post->post_status === 'publish') {
        $post_link = home_url('/' . $post->post_name . '/');
    }
    return $post_link;
}
add_filter('post_type_link', 'custom_post_type_link', 10, 2);
