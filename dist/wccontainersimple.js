angular.module('wcContainerSimpleTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('container-simple.html',
    "<div class=\"container-fluid wcContainer\">\r" +
    "\n" +
    "	<div ng-transclude=\"container\"></div>	\r" +
    "\n" +
    "</div>"
  );

}]);

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
