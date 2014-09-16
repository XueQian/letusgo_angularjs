'use strict';

angular.module('angularLeteusgoApp')
  .controller('indexCtrl', function ($scope, goodsItemService) {

    $scope.$emit('_parent_indexActive');

    $scope.totalCount = goodsItemService.get('totalCount') || 0;

    $scope.$on('_parent_totalCount', function () {

      var cartList = goodsItemService.get('cartProduct');
      $scope.totalCount = goodsItemService.getTotalCount(cartList);
    });

    $scope.$on('_parent_totalCount===0', function () {

      $scope.totalCount = 0;
    });

    $scope.$on('_parent_indexActive', function () {

      $scope.indexActive = true;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('_parent_goodsListActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = true;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('_parent_cartActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = true;
      $scope.manageActive = false;
    });

    $scope.$on('_parent_manageActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = true;
    });


  });
