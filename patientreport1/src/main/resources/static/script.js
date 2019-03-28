var app = angular.module('app', ['ui.bootstrap']);

  app.controller('postcontroller', function($scope){
  
  $scope.curPage = 1,
  $scope.itemsPerPage = 3,
  $scope.maxSize = 5;
    
    this.items = itemsDetails;
  
  
  $scope.numOfPages = function () {
    return Math.ceil(itemsDetails.length / $scope.itemsPerPage);
    
  };
  
    $scope.$watch('curPage + numPerPage', function() {
    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
    end = begin + $scope.itemsPerPage;
    
    $scope.filteredItems = itemsDetails.slice(begin, end);
  });
  });

  var itemsDetails =  { itemCode : 100,
	      itemName : 'ONE',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 7,
	      restrictStock : 16,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 102,
	      itemName : 'TWO',
	      itemDescription : 'Hey Hie',
	      uom : 'GALLONS',
	      available : 'YES',
	      openStock : 8,
	      restrictStock : 15,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 103,
	      itemName : 'THREE',
	      itemDescription : 'Hey Hie',
	      uom : 'GALLONS',
	      available : 'YES',
	      openStock : 0,
	      restrictStock : 15,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 104,
	      itemName : 'FOUR',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 0,
	      restrictStock : 15,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 105,
	      itemName : 'FIVE',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 0,
	      restrictStock : 14,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 106,
	      itemName : 'SIX',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 0,
	      restrictStock : 5,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 107,
	      itemName : 'SEVEN',
	      itemDescription : 'Hey Hie',
	      uom : 'GALLONS',
	      available : 'YES',
	      openStock : 0,
	      restrictStock : 5,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 108,
	      itemName : 'EIGHT',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 5,
	      restrictStock : 0,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 109,
	      itemName : 'NINE',
	      itemDescription : 'Hey Hie',
	      uom : 'GALLONS',
	      available : 'YES',
	      openStock : 5,
	      restrictStock : 0,
	      threshold : 0,
	      active : 'YES'
	      },
	    { itemCode : 110,
	      itemName : 'TEN',
	      itemDescription : 'Hey Hie',
	      uom : 'FEET',
	      available : 'YES',
	      openStock : 77,
	      restrictStock : 0,
	      threshold : 0,
	      active : 'YES'
	      }
	  ];
