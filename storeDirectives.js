/*global angular */
(function () {
    "use strict";
    var storeDirectives = angular.module('storeDirectives', []);
    
    
    storeDirectives.directive('product', function () {
        return {
            restrict: 'A',
            scope: {
                product: '='
            },
            templateUrl: 'itemLink.html'
        };
    });
    
}());