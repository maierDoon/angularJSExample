/*global angular */
(function () {
    "use strict";
    var store = angular.module('storeApp', ['ngRoute', 'storeServices', 'storeDirectives', 'storeControllors', 'storeFilters']);
        
    store.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'productList.html',
                controller: 'storeController'
            })
            .when('/:productName', {
                templateUrl: 'productDetailsPage.html',
                controller: 'productDetailsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
        
}());