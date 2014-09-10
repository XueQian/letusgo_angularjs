'use strict';

angular.module('angularLeteusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams) {

    $scope.$emit('_parent_manageGoodsActive');

    $scope.category = operateCategoryService.getCategorysById($routeParams.id,null);
    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.modifyCategory = function () {

      return operateCategoryService.modifyCategory($scope.category);
    };

  });



