var workSheetApp = angular.module('workSheetApp', ['ngcTableDirective']);
workSheetApp.controller('SheetController', ['$scope', function workSheetApp($scope, ngcTableDirective) {
	$scope.cell = 'Hoja';
	$scope.data = [];

	$scope.datos = [
		{num_emp:"1", nombre:"Thomas", paterno: 'Santiago', materno:'Gonzalez',
		edad:27, genero:'M', curp:'XXXX000000XXXXXXXX', rfc:'XXXX000000XXX', 
		nss:'XXXXXXXXXXX', fecha_nac:'2014-01-01', puesto:'Programador',
		tipo_contrato:'Permanente', departamento:'MyCloud', tipo_nomina:'Quincenal',
		email:'thom.gonzalez@gmail.com',
		},
	];

	for (var i=0; i < 20; i++) {
		angular.forEach($scope.datos, function(value) {
		$scope.data.push([
			value.num_emp, value.nombre, value.paterno, value.materno, value.edad,
				value.genero, value.fecha_nac, value.tipo_nomina, value.tipo_contrato,
				value.puesto, value.departamento, value.email
			]);
		});
	};


}]);