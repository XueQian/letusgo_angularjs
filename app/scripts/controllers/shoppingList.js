'use strict';

angular.module('angularLeteusgoApp')
    .controller('shoppingListCtrl', function ($scope) {
        $scope.orderItems = JSON.parse(localStorage.getItem('cartProduct'));
        $scope.$parent.totalCount=getTotalCount();
        $scope.totalMoney = getTotalMoney();
        $scope.remove = function(){
            localStorage.removeItem('cartProduct');
            localStorage.setItem('totalCount',0);
            $scope.$parent.totalCount=getTotalCount();
        };
    });

