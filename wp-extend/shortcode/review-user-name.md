# Show Name Char instead of Image

function get_shortened_display_name($atts) {
$atts = shortcode_atts(array(
'user_id' => '',
), $atts);

    if (empty($atts['user_id'])) {
        return 'UK';
    }

    $user_info = get_userdata($atts['user_id']);

    if (!$user_info) {
        return 'UK';
    }

    $name_parts = explode(' ', $user_info->display_name);

    $shortened_name = $name_parts[0][0]; // First name, first character

    // Add second name's first character if available
    if (isset($name_parts[1])) {
        $shortened_name .= $name_parts[1][0];
    }

    return $shortened_name;

}
add_shortcode('display_shortened_name', 'get_shortened_display_name');

## USE

[display_shortened_name user_id=%s] or [display_shortened_name user_id="123"]
