/*global angular */
(function () {
    "use strict";
    var storeServices = angular.module('storeServices', []);
    
    storeServices.factory('storeFactory', function ($http) {
        return {
            getProducts: function (callback) {
                $http({
                    method: 'get',
                    url: 'products.json',
                    cache: true
                }).success(function (data) {
                    callback(data);
                });
            }
        };
    });
}());