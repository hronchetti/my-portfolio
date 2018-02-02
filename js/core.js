/*=================================
NAVIGATION MENU CONTROL
=================================*/
var menu = document.getElementsByClassName('menu')[0];
var menuGrow = document.getElementsByClassName('menu--grow')[0];
var menuIcon = document.getElementsByClassName('menu__icon')[0];
var navigation = document.getElementsByClassName('navigation')[0];
var body = document.getElementsByClassName('body')[0];

$(menu).click(function(){
    // Changing menu button colour and icon
    $(menu).toggleClass('menu--active');
    $(menuIcon).toggleClass('menu__icon--active icon-menu icon-close');
    $(menuGrow).toggleClass('hidden');
    $(body).toggleClass('stop-scrolling');
    // Toggling navigation visibility & disable scroll when open
    if($(navigation).hasClass('hidden')){
        // Waiting until menuGrow animation has finished
        setTimeout(function(){
            $(navigation).removeClass('hidden');
        }, 250);
    } else{
        $(navigation).addClass('hidden');
    }
});
/*=================================
ON DOCUMENT READY
=================================*/
window.onload = function(){
    // Fadeout loading spinner and overlay
    setTimeout(showPage, 500);
    // Build page animation effect
    setTimeout(function(){
        $('.animate-bottom').css('display','block');
    }, 500);
};
/*=================================
LOADING SPINNER
=================================*/
var overlay = document.getElementsByClassName('overlay')[0];
var loadingSpinner = document.getElementsByClassName('loader')[0];
// Fadeout overlay and loading spinner
function showPage() {

    $(loadingSpinner).css('display','none');
    $(overlay).css('animation','fadeOut 1s forwards');
    // Remove overlay from DOM after faded out
    setTimeout(function(){
        $(overlay).css('display','none');
    }, 1000);
}
/*=================================
MOBILE IMAGE SUPPORT
=================================*/
var imgs = document.getElementsByTagName('img');
// If mobile screen -> Show mobile images
if (window.matchMedia('(max-width: 600px)').matches) {
    for (var i = 0; i < imgs.length; i++) {

        var oldFile = imgs[i].getAttribute('src');
        var newFile = oldFile.slice(0, -4)+'_mobile.jpg';
        // Set the images src to mobile version of the image
        imgs[i].setAttribute('src', newFile);
    }
}