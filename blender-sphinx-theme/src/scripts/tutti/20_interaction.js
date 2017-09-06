/* Redirect
 * Usage:
 * - element must have class 'js-redirect'
 * - element must have attribute 'data-url'
 * e.g.: <div class="js-redirect" data-url="https://cloud.blender.org">
*/
var jsRedirect = document.getElementsByClassName("js-redirect");

var redirect = function() {
	var url = this.getAttribute("data-url");
	window.location.href = url;
};

for (var i = 0; i < jsRedirect.length; i++) {
	jsRedirect[i].addEventListener('click', redirect, false);
}


/* Isolate Images
 * Usage:
 * - image must have class 'js-isolify'
*/
var isolifyElements = document.getElementsByClassName("js-isolify");

function showFeaturePreview() {
	var isolateContainer = document.getElementById('isolated');
	var url = this.getAttribute("data-url");
	var credits = this.getAttribute("data-credits");

	isolateContainer.innerHTML = '<img src="' + url + '">';
	if (credits){
		isolateContainer.innerHTML += '<div class="credits">' + credits + '</div>';
	}

	isolateContainer.className = 'active';
}

function hideFeaturePreview() {
	var isolateContainer = document.getElementById('isolated');
	if (isolateContainer.classList.contains("active")) {
		isolateContainer.classList.remove("active");
	}
}

for (var i = 0; i < isolifyElements.length; i++) {
	isolifyElements[i].addEventListener('click', showFeaturePreview, false);
}

window.document.onkeydown = function (e) {
	if (!e) e = event;
	if (e.keyCode == 27) {
		hideFeaturePreview();
	}
}

// Click anywhere in the page to hide the overlay
document.body.addEventListener('click', hideFeaturePreview, true);
