
/*global angular */
(function () {
    "use strict";
    var storeFilters = angular.module('storeFilters', []);
  
    storeFilters.filter('toUpperCase', function () {
        return function (string) {
            return string.toUpperCase();
            
        };
        
    });
    
}());
