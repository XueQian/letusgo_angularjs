'use strict';

angular.module('letusgoApp')
  .controller('manageCategoryCtrl', function ($scope, Operatecategorieservice, GoodsItemService, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

    $scope.categories = Operatecategorieservice.loadcategories();

    $scope.getItemById = function (id) {

      return Operategoodsitemservice.getItemById(id);
    };


    $scope.deleteCategory = function (index, id) {

      if ($scope.getItemById(id)) {

        $scope.categories.splice(index, 1);
        GoodsItemService.set('categoryList', $scope.categories);
      }
    };

    $scope.addCategory = function () {

      Operatecategorieservice.addCategory($scope.category, $scope.categories);
    };


  });
