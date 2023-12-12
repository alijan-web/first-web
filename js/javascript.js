// Add this script to your HTML file or in an external JavaScript file
$(document).ready(function(){
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000, // Set the duration for each slide
        dots: true, // Add navigation dots
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false // Hide arrows on small screens
                }
            }
        ]
    });
});
