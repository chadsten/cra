/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

	$(function() { // Ready

    $('#header-inner .mobile-icon').click(function() {
      $('#block-system-main-menu').toggleClass('open');
      return false;
    });

    // Accordions
    if ($('.view-id-engineered_systems_detail').length > 0) {
      var allPanels = $('.view-id-engineered_systems_detail .views-row > .content').hide();
      var allHeadings = $('.view-id-engineered_systems_detail .views-row > .heading');

      $('.view-id-engineered_systems_detail .views-row > .heading').click(function() {
        allHeadings.removeClass('active');
        allPanels.slideUp('fast');
        $(this).next().slideDown('fast');
        $(this).addClass('active');
        return false;
      });
    }
    // End Accordions

    // Append weird links
    if ($('.page-schedule #page-title').length || $('.page-node-9 #page-title').length) {
      $("#page-title").append("<a href='/user/logout/' class='js-append logout'>Logout</a>");
    }

    if ($('.page-user #page-title').length) {
      $(".form-actions").append("<a href='/user/password/' class='js-append reset-password'>Reset Password</a>");
    }
    // End Append weird links

	}); // End Ready

})(jQuery, Drupal, this, this.document);
