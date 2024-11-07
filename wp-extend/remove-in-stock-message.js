<script>
jQuery(document).ready(function($) {
    $('.stock').each(function() {
        var stockText = $(this).text().trim();
        if (stockText.indexOf('(can be ordered)') !== -1) {
            $(this).text('In stock');
        }
				if (stockText.indexOf('(peut être commandé)') !== -1) {
            $(this).text('En stock');
        }
    });
});
</script>