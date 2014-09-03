'use strict';

angular.module('angularLeteusgoApp')
    .controller('manageCategoryCtrl', function ($scope, operateCategoryService,goodsItemService) {

        var categoryList = operateCategoryService.loadCategorys();
    console.log(categoryList+'99999999999');
    goodsItemService.set('categoryList', categoryList);
        $scope.categorys = goodsItemService.get('categoryList');
    console.log($scope.categorys);
//        $scope.addCategory = function() {
//        $scope.addCategoryModel
//
//    }




    });
