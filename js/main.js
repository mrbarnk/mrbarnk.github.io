!function(e){"use strict";function t(){var t=e(".pt-page-current").height();e(".subpages").height(t+50)}function o(){e(window).width()<1024&&e("#site_header").addClass("mobile-menu-hide")}e(function(){e("#contact-form").on("submit",function(t){if(!t.isDefaultPrevented()){return e.ajax({type:"POST",url:"contact_form/contact_form_php.html",data:e(this).serialize(),success:function(t){var o="alert-"+t.type,a=t.message,i='<div class="alert '+o+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+a+"</div>";o&&a&&(e("#contact-form").find(".messages").html(i),"alert-success"==o&&e("#contact-form")[0].reset())}}),!1}})}),e(window).on("load",function(){e(".preloader").fadeOut("slow"),e(".subpages")[0]&&PageTransitions.init({menu:"ul.site-main-menu"})}).on("resize",function(){o(),setTimeout(function(){t()},500)}).scroll(function(){e(window).scrollTop()<20?e(".header").removeClass("sticked"):e(".header").addClass("sticked")}).scrollTop(0),e(document).on("ready",function(){e(".portfolio_grid").imagesLoaded(function(){var o,a;o=e("#portfolio_grid"),a=e("#portfolio_filters"),o&&(o.shuffle({speed:450,itemSelector:"figure"}),e(".site-main-menu").on("click","a",function(e){o.shuffle("update")}),a.on("click",".filter",function(a){o.shuffle("update"),a.preventDefault(),e("#portfolio_filters .filter").parent().removeClass("active"),e(this).parent().addClass("active"),o.shuffle("shuffle",e(this).attr("data-group")),setTimeout(function(){t()},500)}))}),e(" #portfolio_grid > figure ").each(function(){e(this).hoverdir()});var a=e(".blog-masonry");a.imagesLoaded(function(){a.masonry()}),e(".menu-toggle").on("click",function(){e("#site_header").toggleClass("mobile-menu-hide")}),e(".site-main-menu").on("click","a",function(e){o()}),e(".sidebar-toggle").on("click",function(){e("#blog-sidebar").toggleClass("open")}),e(".testimonials.owl-carousel").owlCarousel({nav:!0,items:3,loop:!1,navText:!1,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}}),e(".text-rotation").owlCarousel({loop:!0,dots:!1,nav:!1,margin:0,items:1,autoplay:!0,autoplayHoverPause:!1,autoplayTimeout:3800,animateOut:"zoomOut",animateIn:"zoomIn"}),e("body").magnificPopup({delegate:"a.lightbox",type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title",gallery:{enabled:!0}},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:null,src:"%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"playervimeocom/video/MS_24.html"},gmaps:{index:"mapsgoogle/MS_25.html",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(e,t,o){t.title=o.el.attr("title")}}}),e(".ajax-page-load-link").magnificPopup({type:"ajax",removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!0}}),e(".form-control").val("").on("focusin",function(){e(this).parent(".form-group").addClass("form-group-focus")}).on("focusout",function(){0===e(this).val().length&&e(this).parent(".form-group").removeClass("form-group-focus")}),e("#map").googleMap(),e("#map").addMarker({address:"15 avenue des champs ElysÃ©es 75008 Paris"})}).on("DOMSubtreeModified",t)}(jQuery);
