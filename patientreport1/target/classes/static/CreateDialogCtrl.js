
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('CreateDialogCtrl', function ($scope,$uibModalInstance, items,$http, $rootScope) {
	
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };
  $scope.parameter={};
  $ctrl.ok = function () {
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
	  var url="http://localhost:8081/patients/create"
		    $http.post(url, $scope.parameter).
		    then(function(data, status, headers, config) {
		        // this callback will be called asynchronously
		        // when the response is available
		        console.log(data);
		        $rootScope.getPatient();
		        alert("submitted successfully")
		      })
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
