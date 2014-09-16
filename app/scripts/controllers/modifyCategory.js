'use strict';

angular.module('letusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.category = Operatecategorieservice.getcategoryById($routeParams.id, null);
    $scope.categories = Operatecategorieservice.loadcategories();

    $scope.modifyCategory = function () {

      return Operatecategorieservice.modifyCategory($scope.category);
    };

  });



