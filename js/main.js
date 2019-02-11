var sw = new ScrollWatch({
    onElementInView: function(data) {
        console.log(data.el, '...is now in view');
    },
    watchOnce: true,
    scrollThrottle:300,
    ignoreClass: 'scroll-watch-ignore',
    infiniteScroll:true
});

$('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
