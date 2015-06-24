var workSheetApp = angular.module('workSheetApp', ['ngcTableDirective']);
workSheetApp.controller('SheetController', ['$scope', function workSheetApp($scope, ngcTableDirective) {
	$scope.data = [];
	$scope.header = [
		'No','Nombre','Paterno','Materno','Edad','Genero','Curp',
		'Rfc','Nss','Fecha nacimiento','Puesto','Tipo Contrato','Departamento',
		'Tipo Nómina', 'Email'
	];
	$scope.datos = [
		{num_emp:"1", nombre:"Thomas", paterno: 'Santiago', materno:null,
		edad:27, genero:'M', curp:'XXXX000000XXXXXXXX', rfc:'XXXX000000XXX', 
		nss:'XXXXXXXXXXX', fecha_nac:'2014-01-01', puesto:'Programador',
		tipo_contrato:'Permanente', departamento:'MyCloud', tipo_nomina:'Quincenal',
		email:'thom.sgonzalez@gmail.com',
		},{num_emp:"2", nombre:"Thom", paterno: null, materno:null,
		edad:27, genero:null, curp:null, rfc:null, 
		nss:null, fecha_nac:null, puesto:null,
		tipo_contrato:null, departamento:null, tipo_nomina:null,
		email:null,
		}
	];

	$scope.init = function(){
		$scope.sheet = 'NameSheet';
		var data = data_cells();
		$scope.data = header_cells(data);
	};
		
	// Add header
	function header_cells(data){
		var headers = [];
		_.each($scope.header, function(value){
			headers.push([value]);
		});
		data.unshift(headers);
		return data;
	};

	var keys = _.keys($scope.datos[0]);
	// Parse  
	function data_cells(){
		var values = [];
		_.each($scope.datos, function(value, key){
			var row = [];
			_.each(keys, function(field){
				var cells = [$scope.datos[key][field]];
				row.push(cells);
			});
			values.push(row);
		});
		return values;
	};

	$scope.init();

}]);