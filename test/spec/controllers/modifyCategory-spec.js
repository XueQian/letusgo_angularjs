'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams;

  beforeEach(function () {

    module('angularLeteusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      operateCategoryService = $injector.get('operateCategoryService');
      operateGoodsItems = $injector.get('operateGoodsItems');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operateCategoryService: operateCategoryService,
          operateGoodsItems: operateGoodsItems,
          $routeParams: $routeParams
        });
      };
    });
  });

  it('$emit', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('_parent_manageGoodsActive');
  });

  it('modifyCategory', function () {
    $scope.category = {};

    createController();
    spyOn(operateCategoryService, 'modifyCategory');

    $scope.modifyCategory();

    expect(operateCategoryService.modifyCategory).toHaveBeenCalledWith($scope.category);

  });

});
