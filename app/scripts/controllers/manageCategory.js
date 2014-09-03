'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService) {

    var categoryList = operateCategoryService.loadCategorys();
    goodsItemService.set('categoryList', categoryList);
    $scope.categorys = goodsItemService.get('categoryList');

    $scope.deleteCategory = function(index) {
      $scope.categorys.splice(index,1);
      console.log("1111111111");
    }

  });
