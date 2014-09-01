'use strict';

angular.module('angularLeteusgoApp')
    .controller('indexCtrl', function ($scope, goodsItemService) {

        $scope.totalCount = goodsItemService.get('totalCount') || 0;

        $scope.$on('_parent_totalCount', function () {

            var cartList = goodsItemService.get('cartProduct');
            $scope.totalCount = goodsItemService.getTotalCount(cartList);
        });

        $scope.$on('_parent_totalCount===0', function () {

            $scope.totalCount = 0;
        });

    });
