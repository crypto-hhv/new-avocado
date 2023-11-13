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

	$(".glitch").mgGlitch({
		destroy: false, // set 'true' to stop the plugin
		glitch: true, // set 'false' to stop glitching
		scale: true, // set 'false' to stop scaling
		blend: true, // set 'false' to stop glitch blending
		blendModeType: "hue", // select blend mode type
		glitch1TimeMin: 600, // set min time for glitch 1 elem
		glitch1TimeMax: 900, // set max time for glitch 1 elem
		glitch2TimeMin: 10, // set min time for glitch 2 elem
		glitch2TimeMax: 115, // set max time for glitch 2 elem
	});
});
