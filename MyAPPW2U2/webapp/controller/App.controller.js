sap.ui.define([	"sap/ui/core/mvc/Controller",
			    "sap/m/MessageToast",
				"opensap/myapp/model/formatter"
				],
			  (Controller, MessageToast, formatter) => { 
				"use strict";
				return Controller.extend("opensap.myapp.controller.App", 
				{ 	formatter: formatter,
					onShowHello: function () {
						// read msg from i18n model
						let oBundle = this.getView().getModel("i18n").getResourceBundle();
						let  sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
						let sMsg = oBundle.getText("helloMsg", [sRecipient]);
					
				// show message
				MessageToast.show(sMsg);

			}
		});
	}
);

