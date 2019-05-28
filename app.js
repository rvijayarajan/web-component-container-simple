(function () {

 	var app = angular.module("main",['wcContainerSimple']);

	app.component("app", {
		template: '<wc-container style="max-height: 100vh;"></wc-container>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
