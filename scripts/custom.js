
// ------------------------------------
// Disable photoswipe for contact icon
// ------------------------------------


$(document).ready(function () {
    bk$('.template-header--social .js-pswp-image-trigger').each(
        function () {
            bk$(this).removeClass('js-pswp-image-trigger').css('cursor', 'default').on('click',
            function (evt) {
                evt.preventDefault();
                }
            );
        }
    );
});


// Contact form toggle
$(document).on("click", ".template-header--social .imagewidget__image", function() {
    $( "body" ).toggleClass( "contact-open" );
});


// Navigation toggle
$(document).on("click", ".navigation-icon--container input", function() {
    $( "body" ).toggleClass( "nav-open" );
});
