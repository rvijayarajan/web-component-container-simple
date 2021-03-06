(function () {

 	var app = angular.module("wcContainerSimple",["wcContainerSimpleTemplates"]);

	app.component("wcContainer", {
		templateUrl: "container-simple.html",
		bindings: {
		},
		controller: "ContainerSimpleController",
		transclude: {
			container: 'container'
		}
	});

	app.controller("ContainerSimpleController", ContainerSimpleControllerFn);

	ContainerSimpleControllerFn.$inject = ["$scope"];

	function ContainerSimpleControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
