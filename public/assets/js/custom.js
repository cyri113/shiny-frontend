/*! getting-started - v0.0.0 - 2016-12-14 */$(document).ready(function(){"use strict";new Swiper("#hero",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,loop:!0,parallax:!0,speed:1e3});$('[data-pages="search"]').search({searchField:"#overlay-search",closeButton:".overlay-close",suggestions:"#overlay-suggestions",brand:".brand",onSearchSubmit:function(a){console.log("Search for: "+a)},onKeyEnter:function(a){console.log("Live search for: "+a);var b=$("#overlay-search"),c=$(".search-results");clearTimeout($.data(this,"timer")),c.fadeOut("fast");var d=setTimeout(function(){c.find(".result-name").each(function(){0!=b.val().length&&($(this).html(b.val()),c.fadeIn("fast"))})},500);$(this).data("timer",d)}})});