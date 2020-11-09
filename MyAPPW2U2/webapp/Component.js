sap.ui.define([
	"sap/ui/core/UIComponent"
],  function(UIComponent) {
	"use strict";

	return UIComponent.extend("opensap.myapp.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// additional initialization can be done here
			 
			//* test with languages 
			// console.log(sap.ui.getCore().getConfiguration().getLanguage());
			// sap.ui.getCore().getConfiguration().setLanguage("EN");
			// console.log(sap.ui.getCore().getConfiguration().getLanguage());
			//
		}

	});
});
