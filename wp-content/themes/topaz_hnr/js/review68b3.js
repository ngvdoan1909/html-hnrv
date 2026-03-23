// Magnific Popup init for gallery
jQuery(function ($) {
  var $gl = $('.gallery-list');
  if ($gl.length && $.fn.magnificPopup) {
    $gl.magnificPopup({
      delegate: 'a.gallery-item',
      type: 'image',
      gallery: { enabled: true },
      image: { verticalFit: true }
    });
  }

  var $bn = $('.bussiness-nav a');
  $bn.on('click', function (e) {
    var href = $(this).attr('href');
    if (href && href.indexOf('#') === 0) {
      e.preventDefault();
      var $target = $(href);
      if ($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - 90 }, 400);
        $bn.removeClass('active');
        $(this).addClass('active');
      }
    }
  });

  $('.gallery-view-all').on('click', function (e) {
    e.preventDefault();
    var $card = $(this).closest('.gallery-card');
    var $first = $card.find('.gallery-list a.gallery-item').first();
    if ($first.length) {
      $first.trigger('click');
    }
  });
});
