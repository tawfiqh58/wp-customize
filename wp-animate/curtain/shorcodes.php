
function my_dynamic_url_shortcode() {
    // Replace with the logic to get your URL using JetEngine tags
    $dynamic_url = Jet_Engine()->listings->data->get_meta( 'image-front' );  
    return $dynamic_url;
}
add_shortcode( 'display_image_url', 'my_dynamic_url_shortcode' );
function display_jetengine_image() {
    $imageId = Jet_Engine()->listings->data->get_meta( 'image-front' );

    if ( $imageId ) {
        $imageUrl = wp_get_attachment_image_url( $imageId, 'full' ); // Get URL, 'full' can be other sizes
        return '<img src="' . $imageUrl . '" alt="Dynamic Image" />';
    } else {
        return ''; // Return empty string if no image is set
    }
}
add_shortcode( 'display_image', 'display_jetengine_image' );

function display_jetengine_webgl_image() {
    $imageFrontId = Jet_Engine()->listings->data->get_meta( 'image-front' );
    $imageBackId = Jet_Engine()->listings->data->get_meta( 'image-back' );
    $imageMapId = Jet_Engine()->listings->data->get_meta( 'image-map' );

    $output = ''; // Start with an empty output string

    // Only proceed if at least one image ID is present
    if ( $imageFrontId || $imageBackId || $imageMapId ) {
        $output .= '<div class="pxl-item--inner">';
        $output .= '    <div class="canvas"></div>';
        $output .= '    <div class="item--image">';

        if ( $imageFrontId ) {
            $imageUrl = wp_get_attachment_image_url( $imageFrontId, 'full' );
            $output .= '      <img decoding="async" src="' . $imageUrl . '" class="image-front" alt="image front" data-sampler="texture0" crossorigin="anonymous" />';
        }

        if ( $imageBackId ) {
            $imageUrl = wp_get_attachment_image_url( $imageBackId, 'full' );
            $output .= '     <img decoding="async" src="' . $imageUrl . '" class="image-back" alt="image back" data-sampler="texture1" crossorigin="anonymous" />';
        }

        if ( $imageMapId ) {
            $imageUrl = wp_get_attachment_image_url( $imageMapId, 'full' );
            $output .= '     <img decoding="async" src="' . $imageUrl . '" class="map" alt="image displacements" data-sampler="map" crossorigin="anonymous" />';
        }

        $output .= '    </div>';
        $output .= '</div>';
    } 

    return $output;
}
add_shortcode( 'display_webgl_images', 'display_jetengine_webgl_image' );