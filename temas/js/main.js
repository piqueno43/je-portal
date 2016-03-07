$(".menu").accessibleMegaMenu({
    /* prefix for generated unique id attributes, which are required
    to indicate aria-owns, aria-controls and aria-labelledby */
    uuidPrefix: "accessible-megamenu",

    /* css class used to define the megamenu styling */
    menuClass: "nav-menu",

    /* css class for a top-level navigation item in the megamenu */
    topNavItemClass: "nav-item",

    /* css class for a megamenu panel */
    panelClass: "sub-nav",

    /* css class for a group of items within a megamenu panel */
    panelGroupClass: "sub-nav-group",

    /* css class for the hover state */
    hoverClass: "hover",

    /* css class for the focus state */
    focusClass: "focus",

    /* css class for the open state */
    openClass: "open"
});


$(function() {
    $(".nav-menu .sub-nav").each(function() {
        var n = $(this).find(".sub-nav-group").length;
        switch (String(n)) {
            case "1":
            $(this).addClass('uma-coluna-menu');
            break;
            case "2":
            $(this).addClass('duas-colunas-menu');
            break;
            case "3":
            $(this).addClass('tres-colunas-menu');
            break;
            case "4":
            $(this).addClass('quatro-colunas-menu');
            break;
            default:
            break;
        }

    });
});

$(document).ready(function() {
    $(".nav-item:not(:has(ul))").addClass('sem-submenu');
});





(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
        $current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
        .find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
        .addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');

    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);