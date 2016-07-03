/*global angular */
(function () {
    "use strict";
    var storeControllors = angular.module('storeControllors', []);
    
    storeControllors.controller('storeController', function ($scope, storeFactory) {
        storeFactory.getProducts(function (data) {
            $scope.products = data;
        });
        $scope.addProduct = function () {
            $scope.products.push({name: $scope.newName, price: $scope.newPrice});
        };
    });
        
    storeControllors.controller('productDetailsController', function ($scope, storeFactory, $routeParams) {
        storeFactory.getProducts(function (data) {
            $scope.product = data.find(function (product) {
                return product.name === $routeParams.productName;
            });
        });
    });
}());