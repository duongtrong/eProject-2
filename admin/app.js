// var myApp = angular.module('myApp',['ui.router', 'ui.bootstrap']);

// myApp.config(appRouterConfig);
// function appRouterConfig($stateProvider, $urlRouterProvider) {
//     $stateProvider
//    .state('index', {
//     	url: '/',
//     	templateUrl: 'view/index.html',
//     	controller: 'BooksController'
//    })
//    .state('list_product', {
//     	url: '/product/list_product',
//     	templateUrl: 'view/list_product.html',
//     	controller: 'BooksController'
//    })
//    .state('add_product', {
//         url: '/product/add_product',
//         templateUrl: 'view/add_product.html',
//         controller: 'BooksController'
//    })
//    .state('add_author', {
//         url: '/product/add_author',
//         templateUrl: 'view/add_author.html',
//         controller: 'BooksController'
//    });

//   	$urlRouterProvider.otherwise('/'); 
// };

var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'view/index.html'
	})
	.when('/add_product',{
		controller:'BooksController',
		templateUrl: 'view/add_product.html'
	})
	.when('/list_product',{
		controller:'BooksController',
		templateUrl: 'view/list_product.html'
	})
	.when('/add_product',{
		controller:'BooksController',
		templateUrl: 'view/add_product.html'
	})
	.when('/add_author',{
		controller:'BooksController',
		templateUrl: 'view/add_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});



