angular.module('app', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('CartController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log("Load controller cart...");
	$scope.loadCart = function(){
		var customerCart = JSON.parse(localStorage.getItem("addCart"));
		if (customerCart !== null) {
			backCart = [];
			for (var i = 0; i < customerCart.length; i++) {
				function functionName(){
					var backCartItem = new Object();
					backCartItem.quanlity = customerCart[i].quanlity;
					$http.get('/api/books/'+ customerCart[i].data).success(function(res){				
						backCartItem.databack = res;			
					});				
					backCart.push(backCartItem);
				}
				functionName();
			}
			console.log(backCart);

			$scope.backCart = backCart;
		}

	};

	$scope.addCart = function(a){
		var customerCart = JSON.parse(localStorage.getItem("addCart"));
		var userId = localStorage.getItem("userId");
		var cart = {};
		cart.userId = userId;
		cart.cart = {};
		cart.cart.productId = customerCart[a].data;
		cart.cart.quanlity = customerCart[a].quanlity;	
		console.log(cart);	
		$http.post('/api/carts/', cart).success(function(response){
			console.log(response);
			var dialog = bootbox.dialog({
			    title: 'Đang gửi thông tin đơn hàng',
			    message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
			});
			dialog.init(function(){
			    setTimeout(function(){
			        dialog.find('.bootbox-body').html('Đã gửi xong thông tin, chúng tôi sẽ liên lạc với bạn, hãy giữ liên lạc nhé!');
			    }, 3000);
			});
		});
	};

	$scope.addAllCart = function(){
		var customerCart = JSON.parse(localStorage.getItem("addCart"));
		var userId = localStorage.getItem("userId");
		var cart = {};
		cart.userId = userId;
		cart.cart = [];
		for (var i = 0; i < customerCart.length; i++) {
			cartItem = new Object;
			cartItem.productId = customerCart[i].data;
			cartItem.quanlity = customerCart[i].quanlity;
			cart.cart.push(cartItem);
		}

		console.log(cart);
		$http.post('/api/carts/', cart).success(function(response){
			console.log(response);
			var dialog = bootbox.dialog({
			    title: 'Đang gửi thông tin đơn hàng',
			    message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
			});
			dialog.init(function(){
			    setTimeout(function(){
			        dialog.find('.bootbox-body').html('Đã gửi xong thông tin, chúng tôi sẽ liên lạc với bạn!');
			    }, 3000);
			});
		});
	};

	$scope.deleteCart = function(a){
		var customerCart = JSON.parse(localStorage.getItem("addCart"));
		customerCart.splice(a, 1);
		localStorage.removeItem("addCart");
		localStorage.setItem("addCart", JSON.stringify(customerCart));
		$scope.loadCart();
	};

}]);


myApp.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      
    },
    {
      title: 'Dynamic Group Header - 2',
      
    },
    {
      title: 'Dynamic Group Header - 3',
      
    }
  ];
  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
});


myApp.controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});