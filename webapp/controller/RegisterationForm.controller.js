sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ExerciseSolution.ExerciseSolution.controller.RegisterationForm", {
		onInit: function () {
			// HTML string bound to the formatted text control
				var oModel = new JSONModel({
					HTML : "<p style=\"color:white;\">I accept the <a href=\"\" style=\"color:white; font-weight:600; text-decoration:underline;\">Terms and Conditions</a></p>"
				});
				this.getView().setModel(oModel);
		}
	});
});