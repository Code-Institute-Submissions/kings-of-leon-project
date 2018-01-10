angular.module('KOLApp',['ngRoute', 'RouteControllers']);

angular.module('KOLApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/kings-of-leon-project/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    
    .when('/multimedia', {
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
    
});