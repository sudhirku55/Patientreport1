var app = angular.module('app', ['ui.bootstrap']);

app.controller('postcontroller', function ($scope,$uibModal, $log, $document,$http, $rootScope) {
 
var $ctrl = this;
	
  this.$onInit = function () {
	  $rootScope.listOfPatient = null;
	  $ctrl.items = ['Fluids', 'Lab', 'Nutrition','Vital Signs'];
	  $scope.items = ['Fluids', 'Lab', 'Nutrition','Vital Signs'];
	  $scope.getPatient();
	 }
  
  $scope.deleteAction= function(id){
	  var url="http://localhost:8081/patients/"+id
		    $http.delete(url).
		    then(function(response, status, headers, config) {
		        // this callback will be called asynchronously
		        // when the response is available
		    	$scope.getPatient();
		        console.log(response);
		        alert("deleted successfully")
		      })
  }
      
  $rootScope.getPatient = function(){
	  
    var url="http://localhost:8081/patients/get"
    $http.get(url).
    then(function(response, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
    	 $rootScope.listOfPatient=response.data;
        console.log(response);
     //   alert(")
      })
  }
 
  
  
  $scope.editDialog=function(obj){
		 
		
	  $scope.data=obj;
		// creating dialog box object
		var modalInstance = $uibModal.open({
		  animation: true,		  		 
		  templateUrl: 'EditPopup.html',
		  controller: 'EditDialogCtrl',		 	
		  resolve: {
		    data: function () {
		      return  $scope.data;
		    }
		  }
		});
		
		
  }
  
  
  $ctrl.open = function (parentSelector) {
	 
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      // creating dialog box object
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'CreateDialogCtrl',
      controllerAs: '$ctrl',
       
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

 

  $scope.apply=function(){
	  
	  if($rootScope.listOfPatient!= null){
		  for(var i=0;i<$rootScope.listOfPatient.length;i++){
			  
			  var obj1 = $rootScope.listOfPatient[i];
			  for(var j=i+1;j<$rootScope.listOfPatient.length;j++){
				  var obj2 = $rootScope.listOfPatient[j];
			   if(obj1.name==obj2.name  && obj1.group==obj2.group){
				    
				   alert("allready exist");
				   return ;
			   }
			  }
		  }
	  }
	  for(var i=0;i<$rootScope.listOfPatient.length;i++){
		  var obj1 = $rootScope.listOfPatient[i];
	  var url="http://localhost:8081/patients/"+obj1._id
		    $http.put(url, obj1).
		    then(function(data, status, headers, config) {
		        // this callback will be called asynchronously
		        // when the response is available
		        console.log(data);
		        $rootScope.getPatient();
		        
		      })
	  }
	  alert("updated successfully")
  }
 
});


 