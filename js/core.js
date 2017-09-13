/*=================================
NAVIGATION MENU CONTROL
=================================*/
var menu = document.getElementsByClassName('menu')[0];
var menuIcon = document.getElementsByClassName('menu__icon')[0];
var navigation = document.getElementsByClassName('navigation')[0];

$(menu).click(function(){
    $(navigation).toggleClass('hidden');
    $(menu).toggleClass('menu--active');
    $(menuIcon).toggleClass('menu__icon--active icon-menu icon-close');
    $('body').toggleClass('stop-scrolling')
});
/*=================================
APPLYING MULTIPLE FUNCTIONS ON READY
=================================*/
$(document).ready(function(){
    // Loading spinner fadeout
    setTimeout(showPage, 500)
    // Build page animations
    setTimeout(buildPage, 500)
});
/*=================================
LOADING SPINNER
=================================*/
var overlay = document.getElementsByClassName('overlay')[0];
var loadingSpinner = document.getElementsByClassName('loader')[0];
var pageLoaded = false;
// Function to fadeout overlay and loading spinner
function showPage() {
    loadingSpinner.style.display = 'none';
    
    $(overlay).css('animation','fadeOut 1s forwards');
    
    setTimeout(function(){
        overlay.style.display = 'none';
    }, 1000);
}
/*=================================
BUILD PAGE ANIMATIONS
=================================*/
function buildPage(){
    $('.animate-bottom').each(function(i){
        $('.animate-bottom').eq(i).css('display','block');
    })
}
/*=================================
MOBILE IMAGE SUPPORT
=================================*/
var imgs = document.getElementsByTagName('img');
// If mobile screen
if (window.matchMedia('(max-width: 600px)').matches) {
    for (var i = 0; i < imgs.length; i++) {

        var oldFile = imgs[i].getAttribute('src');
        var newFile = oldFile.slice(0, -4)+'_mobile.jpg';
        // Set the images src to mobile version of the image
        imgs[i].setAttribute('src', newFile);
    }
}