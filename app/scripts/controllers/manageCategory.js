'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService) {

//    var categoryList = operateCategoryService.loadCategorys();
//    goodsItemService.set('categoryList', categoryList);
    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.deleteCategory = function(index) {
      $scope.categorys.splice(index,1);
      console.log("2222222");
      goodsItemService.set('categoryList', $scope.categorys);
    };

//    $scope.addCategory = operateCategoryService.addCategory($scope.category,$scope.categorys);

  });
