document.addEventListener('DOMContentLoaded', function () {
  const logout = document.querySelectorAll('.logout-menu-item a');

  logout.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = '<?php echo wp_logout_url( home_url() ); ?>';
    });
  });
});
