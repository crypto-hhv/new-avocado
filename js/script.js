$(function () {
	"use strict";
	AOS.init({
		duration: 1200,
	});
	// preloader
	$(document).ready(function () {
		// Fakes the loading setting a timeout
		setTimeout(function () {
			$("body").addClass("loaded");
		}, 100);
	});
});
