/*global QUnit*/

sap.ui.define([
	"ExerciseSolution/ExerciseSolution/controller/RegisterationForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("RegisterationForm Controller");

	QUnit.test("I should test the RegisterationForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});