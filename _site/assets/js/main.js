/** 
 * Main Navigation
 * 
 */
var mainNavigation = document.getElementById('main-nav');
var prevScrollpos = window.pageYOffset;

// When the page is scrolled all the way to the top, hide the background color of the main nav
function toggleMainNavBackgroundOnScroll() {
	var currentScrollPos = window.pageYOffset;

	if(currentScrollPos > mainNavigation.offsetHeight) {
		mainNavigation.classList.add('l-main-nav--background-white');
	} else {
		mainNavigation.classList.remove('l-main-nav--background-white');
	}
}

// When the user scrolls down, hide the main nav. When the user scrolls up, show the main nav
function toggleMainNavOnScroll() {
	var currentScrollPos = window.pageYOffset;

	if (prevScrollpos >= currentScrollPos || currentScrollPos < 10) {
		mainNavigation.style.top = "0";
	} else {
		mainNavigation.style.top = -(mainNavigation.offsetHeight + 8) + "px";
	}
	
	prevScrollpos = currentScrollPos;
}

// Show mobile main nav on click
function toggleMobileMainNav() {
	mainNavigation.classList.toggle('is-open');
	mainNavigation.classList.toggle('is-closed');
}

window.addEventListener('scroll', toggleMainNavBackgroundOnScroll);
window.addEventListener('scroll', toggleMainNavOnScroll);
