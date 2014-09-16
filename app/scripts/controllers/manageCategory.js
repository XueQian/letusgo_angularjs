'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService, operateGoodsItems) {

    $scope.$emit('_parent_manageActive');

    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.getItemsById = function (id) {

      return operateGoodsItems.getItemsById(id);
    };


    $scope.deleteCategory = function (index, id) {

      if ($scope.getItemsById(id)) {

        $scope.categorys.splice(index, 1);
        goodsItemService.set('categoryLists', $scope.categorys);
      }
    };

    $scope.addCategory = function () {

      operateCategoryService.addCategory($scope.category, $scope.categorys);
    };


  });
