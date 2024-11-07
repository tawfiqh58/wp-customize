#

## By using dynamic field with customize output

Meta data -> Birdeye ID as %s

<script type="text/javascript" src="https://birdeye.com/embed/v7/%s/9/9876543219915183" async></script>
<div id="bf-revz-widget-9876543219915183"></div>

## Creating shortcode

```php
function birdeye_widget_shortcode() {
    $post_id = get_the_ID();

    $birdeye_id = get_post_meta($post_id, 'birdeye_id', true);

    if( !empty($birdeye_id) ) {
        return '<script type="text/javascript" src="https://birdeye.com/embed/v7/' . esc_attr($birdeye_id) . '/9/9876543219915183" async></script>
        <div id="bf-revz-widget-9876543219915183"></div>';
    } else {
        return '<!-- birdeye_id not found -->';
    }
}
add_shortcode('birdeye_widget', 'birdeye_widget_shortcode');
```

use shortcode widget and past:
[birdeye_widget]

---

## JS alternative

```Text Editor
<span id="birdeye-meta" style="display: none;">
[jet_engine_data dynamic_field_source="meta" dynamic_field_post_meta="birdeye_id"]
</span>
```

```js
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {
        var birdeyeID = document.getElementById('birdeye-meta').innerText;
        if (birdeyeID) {
            var scriptTag = document.createElement('script');
            scriptTag.src = "https://birdeye.com/embed/v7/" + birdeyeID + "/9/9876543219915183";
            scriptTag.async = true;

            // At body
            document.body.appendChild(scriptTag);
        } else {
            console.log('birdeye_id not found');
        }
    });
</script>

<div id="bf-revz-widget-9876543219915183"></div>
```
