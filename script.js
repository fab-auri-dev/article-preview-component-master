const shareIcon = document.getElementById( 'shareIcon' );
const shareIconMobile = document.getElementById( 'shareIconMobile' );
const userPreview = document.getElementById( 'userPreview' );
const socialIconsMobile = document.getElementById( 'socialIconsMobile' );
const articlePreviewInfo = document.querySelector( '.article-preview-info' );
const shareWrapper = document.getElementById( 'shareWrapper' );
const drawers = document.getElementById( 'drawers' );


function showTooltip() {
    this.classList.toggle( 'selected' );

    shareWrapper.classList.toggle( 'show-tooltip' );
};
shareIcon.addEventListener( 'click', showTooltip );


function showTooltipMobile() {
    userPreview.classList.toggle( 'd-none' );
    socialIconsMobile.classList.toggle( 'd-flex-evenly-center' );
    articlePreviewInfo.classList.toggle( 'bg-very-dark-grayish-blue-radius' );
};
shareIconMobile.addEventListener( 'click', showTooltipMobile );


drawers.addEventListener( 'click', ( e ) => {
    e.target.classList.toggle( 'grow' );
} );

addEventListener( "resize", ( event ) => {
    if ( window.matchMedia( 'screen and (max-width: 550px)' ).matches ) {
        articlePreviewInfo.classList.remove( 'bg-very-dark-grayish-blue-radius' );
        socialIconsMobile.classList.remove( 'd-flex-evenly-center' );
        userPreview.classList.remove( 'd-none' );
    };
} );