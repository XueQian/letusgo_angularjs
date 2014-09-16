'use strict';

angular.module('letusgoApp')
  .controller('indexCtrl', function ($scope, GoodsItemService) {

    $scope.$emit('parent_indexActive');

    $scope.totalCount = GoodsItemService.get('totalCount') || 0;

    $scope.$on('parent_totalCount', function () {

      var cartList = GoodsItemService.get('cartItems');
      $scope.totalCount = GoodsItemService.getTotalCount(cartList);
    });

    $scope.$on('parent_totalCount===0', function () {

      $scope.totalCount = 0;
    });

    $scope.$on('parent_indexActive', function () {

      $scope.indexActive = true;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_goodsListActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = true;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_cartActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = true;
      $scope.manageActive = false;
    });

    $scope.$on('parent_manageActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = true;
    });


  });
