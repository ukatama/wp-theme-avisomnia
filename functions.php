<?php
add_theme_support('custom-header');

add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', ['parent-style']);

  wp_dequeue_script('twentynineteen-priority-menu');
  wp_deregister_script('twentynineteen-priority-menu');
  wp_dequeue_script('twentynineteen-touch-navigation');
  wp_deregister_script('twentynineteen-touch-navigation');
  wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.1.1.min.js', [], false, true);
  wp_enqueue_script('basis', get_stylesheet_directory_uri() . '/node_modules/getbasis/dist/js/basis.min.js', [], false, true);
  wp_enqueue_script('avisomnia-script', get_stylesheet_directory_uri() . '/script.js', [], false, true);
}, 11);

add_action('wp_head', function() {
  ?>
<style>
  .site-title {
    background-image: url(<?php header_image(); ?>);
  }
</style>
  <?php
});

add_action('wp_footer', function() {
  if (function_exists('yoast_breadcrumb')) {
    yoast_breadcrumb('<p id="breadcrumbs" style="display: none;">','</p>');
  }
});
?>