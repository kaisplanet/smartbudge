(function($) {
    "use strict";

    $(document).ready( function() {

        if($('.testimonial-carousel-active').length > 0) {
            $('.testimonial-carousel-active').slick({
                slidesToShow: 3, 
                slidesToScroll: 1, 
                arrows: false,
                dots: true,
                centerMode: true,
                speed: 1100,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1360,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],

            });
        }

        if($('.testimonial-nav-carousel-active').length > 0) {
            $('.testimonial-nav-carousel-active').slick({
                slidesToShow: 3, 
                slidesToScroll: 1, 
                arrows: true,
                speed: 950,
                prevArrow: $('.testimonial-nav-prev'),
                nextArrow: $('.testimonial-nav-next'),
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1360,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],

            });
        }

        /*---------------------------------------------
        Scroll up
        ---------------------------------------------*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="bi bi-arrow-up-short"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

    // Acción del botón Descargar
    $("#btnDescargar").on("click", function () {
        $("#alertMessage").text("Redirigiendo a Descargar Alke Wallet...");
        $("#alertMessage").attr("class", "alert-success small mt-3 p-2 text-center");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 5000);
    });

    }); // end document ready function


})(jQuery); // End jQuery
