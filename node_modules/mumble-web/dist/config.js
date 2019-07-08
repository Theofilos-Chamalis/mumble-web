/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	// Note: You probably do not want to change any values in here because this
	//       file might need to be updated with new default values for new
	//       configuration options. Use the [config.local.js] file instead!

	window.mumbleWebConfig = {
	  // Which fields to show on the Connect to Server dialog
	  'connectDialog': {
	    'address': true,
	    'port': true,
	    'token': true,
	    'username': true,
	    'password': true
	  },
	  // Default values for user settings
	  // You can see your current value by typing `localStorage.getItem('mumble.$setting')` in the web console.
	  'settings': {
	    'voiceMode': 'vad', // one of 'cont' (Continuous), 'ptt' (Push-to-Talk), 'vad' (Voice Activity Detection)
	    'pttKey': 'ctrl + shift',
	    'vadLevel': 0.3,
	    'toolbarVertical': false,
	    'showAvatars': 'always', // one of 'always', 'own_channel', 'linked_channel', 'minimal_only', 'never'
	    'userCountInChannelName': false,
	    'audioBitrate': 40000, // bits per second
	    'samplesPerPacket': 960
	  },
	  // Default values (can be changed by passing a query parameter of the same name)
	  'defaults': {
	    // Connect Dialog
	    'address': window.location.hostname,
	    'port': '443',
	    'token': '',
	    'username': '',
	    'password': '',
	    'joinDialog': false, // replace whole dialog with single "Join Conference" button
	    'matrix': false, // enable Matrix Widget support (mostly auto-detected; implies 'joinDialog')
	    'avatarurl': '', // download and set the user's Mumble avatar to the image at this URL
	    // General
	    'theme': 'MetroMumbleLight'
	  }
	};

/***/ })
/******/ ]);