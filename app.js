(function () {

 	var app = angular.module("main",['wcContainerSimple']);

	app.component("app", {
		template: '<wc-container></wc-container>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
