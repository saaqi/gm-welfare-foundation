jQuery(document).ready(function($) {
  "use strict";

  $("nav").wrap('<div class="js"></div>');
  $(".js nav").before('<button class="menu-toggle" role="button" aria-pressed="false"><span class="menu-button">Menu</span><span class="menu-icon"></span></button>');
  $(".js nav .sub-menu").before('<button class="sub-menu-toggle" role="button" aria-pressed="false>');

  $(".menu-toggle, .sub-menu-toggle").on("click", function() {
    var $this = $(this);
    $this.attr("aria-pressed", function(index, attr) {
      return attr === "true" ? "false" : "true";
    });
    $this.toggleClass("activated");
    $this.next("nav, .sub-menu").slideToggle("fast");
  });
});

jQuery(document).ready(function($) {
  $(".go-top").fadeOut().addClass("fixed");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
      $(".js").addClass("fixed");
      $(".go-top").fadeIn();
      $(".copyright").css({
        border: "0",
        margin: "0",
        padding: "0"
      });
    } else {
      $(".js").removeClass("fixed");
      $(".go-top").fadeOut();
    }
  });

  $("a.top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".gallery a:has(img), a:has(img[class*=wp-image-])").each(function() {
    $(this).addClass("lightbox");
    if (typeof $(this).attr("title") === "undefined") {
      $(this).attr("title", $(this).children("img").attr("alt"));
    }
  });

  if (jQuery.isFunction(jQuery.fn.fancybox)) {
    $.fancybox.defaults.hash = false;
    $(".lightbox").attr("data-fancybox", "gallery").fancybox({});
  }
});
