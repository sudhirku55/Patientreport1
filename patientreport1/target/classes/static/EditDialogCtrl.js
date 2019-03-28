
app.controller('EditDialogCtrl', function ($scope,$uibModalInstance, data,$http, $rootScope) {
	
  
	$scope.items = ['Fluids', 'Lab', 'Nutrition','Vital Signs'];
$scope.id = data._id;
	
  $scope.parameter={};
  $scope.parameter.name=data.name
  $scope.parameter.group=data.group
  
  $scope.ok = function () {
	  if($rootScope.listOfPatient!= null){
		  for(var i=0;i<$rootScope.listOfPatient.length;i++){
			 // debugger;
			  var obj = $rootScope.listOfPatient[i];
			   if(obj.name==$scope.parameter.name  && obj.group==$scope.parameter.group){
				    
				   alert("allready exist");
				   return ;
			   }
		  }
	  }
	  var url="http://localhost:8081/patients/"+$scope.id
		    $http.put(url, $scope.parameter).
		    then(function(data, status, headers, config) {
		        // this callback will be called asynchronously
		        // when the response is available
		        console.log(data);
		        $rootScope.getPatient();
		        alert("updated successfully")
		      })
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
