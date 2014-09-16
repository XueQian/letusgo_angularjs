'use strict';

angular.module('letusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operatecategorieservice, goodsItemService, operateGoodsItems) {

    $scope.$emit('parent_manageActive');

    $scope.categories = operatecategorieservice.loadcategories();

    $scope.getItemById = function (id) {

      return operateGoodsItems.getItemById(id);
    };


    $scope.deleteCategory = function (index, id) {

      if ($scope.getItemById(id)) {

        $scope.categories.splice(index, 1);
        goodsItemService.set('categoryList', $scope.categories);
      }
    };

    $scope.addCategory = function () {

      operatecategorieservice.addCategory($scope.category, $scope.categories);
    };


  });
