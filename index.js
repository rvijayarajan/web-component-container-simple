(function () {

 	var app = angular.module("wcContainerSimple",[]);

	app.component("wcContainer", {
		templateUrl: "container-simple.html",
		bindings: {
		},
		controller: "ContainerSimpleController"
	});

	app.controller("ContainerSimpleController", ContainerSimpleControllerFn);

	ContainerSimpleControllerFn.$inject = ["$scope"];

	function ContainerSimpleControllerFn($scope) {

		var vm = $scope.$ctrl;

		// vm.onSelectLeftNav = function(item) {
		// 	vm.leftNavSelect({
		// 		'item': item
		// 	});
		// };

		// vm.onSelectRightNav = function(item, ditem) {
		// 	vm.rightNavSelect({
		// 		'item': item,
		// 		'ditem': ditem
		// 	});
		// };
	}

})();
