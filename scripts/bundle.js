(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var width = document.getElementById('width');
var length = document.getElementById('length');
var button = document.getElementById('button');
var imperialArea = document.getElementById('imperialArea');
var metricArea = document.getElementById('metricArea');

button.addEventListener('click', function (e) {
	e.preventDefault();
	var feetArea = parseFloat(width.value) * parseFloat(length.value);
	var meterArea = feetArea * 0.09290304;
	imperialArea.innerHTML = "Area by feet: " + feetArea.toFixed(2);
	metricArea.innerHTML = "Area by meters: " + meterArea.toFixed(2);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map