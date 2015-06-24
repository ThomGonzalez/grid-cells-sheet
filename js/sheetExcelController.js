var workSheetApp = angular.module('workSheetApp', ['ngcTableDirective']);
workSheetApp.controller('SheetController', ['$scope', function workSheetApp($scope, ngcTableDirective) {
	$scope.sheet = 'NameSheet';
	$scope.data = [];
	$scope.header = [
		'Empleado','Nombre','Paterno','Materno','Edad','Genero','Curp',
		'Rfc','Nss','Fecha nacimiento','Puesto','Tipo Contrato','Departamento',
		'Tipo Nómina', 'email'
	];

	$scope.datos = [
		{num_emp:"1", nombre:"Thomas", paterno: 'Santiago', materno:'Gonzalez',
		edad:27, genero:'M', curp:'XXXX000000XXXXXXXX', rfc:'XXXX000000XXX', 
		nss:'XXXXXXXXXXX', fecha_nac:'2014-01-01', puesto:'Programador',
		tipo_contrato:'Permanente', departamento:'MyCloud', tipo_nomina:'Quincenal',
		email:'thom.gonzalez@gmail.com',
		},
	];
	
	var keys = _.keys($scope.datos[0]);


	var headers = [];
	_.each($scope.header, function(value){
		headers.push([value]);
	});
	// Add hearder
	console.log(headers)
	$scope.data.push(headers)

	//for (var i=0; i < 20; i++) {
		_.each($scope.datos, function(value, key){
			console.log(value, key);
		/*$scope.data.push([
				value.num_emp, value.name, value.paterno, value.materno, value.edad,
				value.genero, value.fecha_nac, value.tipo_nomina, value.tipo_contrato,
				value.puesto, value.departamento, value.email
			]);*/
		});
	//};


}]);