'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService,operateGoodsItems) {

    $scope.$emit('_parent_manageActive');

    $scope.categorys = operateCategoryService.loadCategorys();

    var getItemsById = function (id) {

      return operateGoodsItems.getItemsById(id);
    };

    $scope.deleteCategory = function (index,id) {

      if (getItemsById(id)) {

        $scope.categorys.splice(index, 1);
        goodsItemService.set('categoryLists', $scope.categorys);
        return;
      }
    };

    $scope.addCategory = function () {

      operateCategoryService.addCategory($scope.category, $scope.categorys);
    };



  });
