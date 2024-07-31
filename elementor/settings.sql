-- WP Data Access
SELECT ID FROM wp_posts WHERE post_title = 'Default Kit' AND post_status = 'publish';

-- Find the value of publish settings (post_id=previous-output)
SELECT meta_value FROM wp_postmeta WHERE post_id = 6 AND meta_key = '_elementor_page_settings';

-- or single query (**make sure you have updated the color at least once**)
SELECT post_id, meta_value
FROM wp_postmeta
WHERE meta_key = '_elementor_page_settings'
  AND post_id IN (SELECT ID FROM wp_posts WHERE post_status = 'publish');

-- update value (example)
UPDATE wp_postmeta
SET meta_value = 'a:1:{s:5:"color";s:7:"#FFFFFF";}'
WHERE post_id = 6
  AND meta_key = '_elementor_page_settings';
