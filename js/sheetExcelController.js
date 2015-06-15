var workSheetApp = angular.module('workSheetApp', ['ngcTableDirective']);
workSheetApp.controller('SheetController', ['$scope', function workSheetApp($scope, ngcTableDirective) {
	$scope.cell = 'Hoja';
	$scope.data = [];

	for (var row = 0; row < 100; row++) {
		var rowContent = [];
		for (var col = 0; col < 100; col++) {
			rowContent.push(row * col + col);
		}
		$scope.data.push(rowContent);
	 }

}]);