angular.module('KOLApp',['ngRoute', 'RouteControllers']);

angular.module('KOLApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    
    .when('/media', {
        templateUrl: 'templates/media.html',
        controller: 'MediaController'
    })
     
    .when('/tours', {
        templateUrl: 'templates/tours.html',
        controller: 'ToursController'
    })
    
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })
    
    .when('/shop', {
        templateUrl: 'templates/shop.html',
        controller: 'ShopController'
    });
});