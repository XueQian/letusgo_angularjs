'use strict';

describe("modifyGoodsItemsCtrl", function () {

  var createController, $scope, goodsItemService, operatecategorieservice, operateGoodsItems, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      operatecategorieservice = $injector.get('operatecategorieservice');
      operateGoodsItems = $injector.get('operateGoodsItems');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyGoodsItemsCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operatecategorieservice: operatecategorieservice,
          operateGoodsItems: operateGoodsItems,
          $routeParams: $routeParams
        });
      };
    });
  });

  it('$emit', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parent_manageGoodsActive');
  });

  it('modifyGoods', function () {
    $scope.itemList = {};
    createController();
    spyOn(operateGoodsItems, 'modifyGoods');

    $scope.modifyGoods();

    expect(operateGoodsItems.modifyGoods).toHaveBeenCalledWith($scope.itemList);

  });

});
