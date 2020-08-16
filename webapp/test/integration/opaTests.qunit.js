/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ExerciseSolution/ExerciseSolution/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});