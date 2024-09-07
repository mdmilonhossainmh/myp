// revel effeft start===============

$(window).on('scroll', function() {
  $('.reveal').each(function() {
      var windowHeight = $(window).height();
      var elementTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();

      if (elementTop < scrollTop + windowHeight - 100) { // Adjust the -100 for earlier reveal
          $(this).addClass('visible');
      }
  });
});


$(window).on('load', function() {
  $('.reveal').each(function() {
      var windowHeight = $(window).height();
      var elementTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();

      if (elementTop < scrollTop + windowHeight - 100) { // Adjust the -100 for earlier reveal
          $(this).addClass('visible');
      }
  });
});
// revel effeft end===============