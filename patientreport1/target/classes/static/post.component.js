var app = angular.module('app', ['ui.bootstrap']);

app.controller('postcontroller', function ($scope,$uibModal, $log, $document,$http, $rootScope) {
 
var $ctrl = this;
	
  this.$onInit = function () {
	  $rootScope.listOfPatient = null;
	  $ctrl.items = ['Fluids', 'Lab', 'Nutrition','Vital Signs'];
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

  

  

 
});


 