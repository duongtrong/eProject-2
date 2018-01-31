var myApp = angular.module('myApp');

myApp.controller('navController', ['$scope', '$location', '$http', function($scope, $location, $rootScope, $http, $routeParams){
	console.log('navController loaded...');

  	$scope.isActive = function(destination){
    return destination === $location.path();
  	};

 	
}]);


myApp.controller('CarouselDemoCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  $scope.active = 0;
	  var slides = $scope.slides = [];
	  var currIndex = 0;

	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: '//unsplash.it/' + newWidth + '/300',
	      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
	  };

	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };

	  for (var i = 0; i < 4; i++) {
	    $scope.addSlide();
	  }

	  // Randomize logic below

	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }

	  // http://stackoverflow.com/questions/962802#962890
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
});


myApp.controller('newsletterController', function ($scope){
	$scope.contactIndex = function(){
		var dialog = bootbox.dialog({
		    title: 'Cảm ơn bạn đã gửi yêu cầu!',
		    message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
		});
		dialog.init(function(){
		    setTimeout(function(){
		        dialog.find('.bootbox-body').html('Đã gửi thông tin thành công!');
		    }, 3000);
		});
	}
});



myApp.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});

myApp.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
});



