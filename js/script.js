// JavaScript Document
// Smooth Anchor Scrolling
$('a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 300);
    return false;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.kk').addClass('kk2 shadow-sm');
    } else {
        $('.kk').removeClass('kk2 shadow-sm');
    }
});

function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}
window.addEventListener("scroll", (ev) => {
    ev.preventDefault()
    windowScroll()
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
// init Isotope AFTER images have loaded
var $grid;

$(document).ready(function() {

    $grid = $('.grid').imagesLoaded('img', function() {
        // ✅ Only initialize Isotope once ALL images are fully loaded
        $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // ✅ Bind filter buttons AFTER grid is ready
        $('.filters-button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({ filter: filterValue });
        });

        // ✅ Bind is-checked class toggle AFTER grid is ready
        $('.button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });

});

// filter functions (these can stay outside, they're just data)
var filterFns = {
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};


$(document).ready(function() {
    $('.navbar-nav li a').click(function(e) {

        $('.navbar-nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})