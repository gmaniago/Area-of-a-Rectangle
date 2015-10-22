'use strict';
var width = document.getElementById('width');
var length = document.getElementById('length');
var button = document.getElementById('button');
var imperialArea = document.getElementById('imperialArea');
var metricArea = document.getElementById('metricArea');

button.addEventListener('click', function(e) {
	e.preventDefault();
	var feetArea = parseFloat(width.value) * parseFloat(length.value);
	var meterArea = feetArea * 0.09290304;
	imperialArea.innerHTML = "Area by feet: " + feetArea.toFixed(2);
	metricArea.innerHTML = "Area by meters: " + meterArea.toFixed(2);
})