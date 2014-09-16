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

  it('getGoodsItemsByBarcode,categories and category',function(){
    spyOn(operateGoodsItems,'getGoodsItemsByBarcode').andReturn({barcode: 'ITEM00005', category: '1', name: '用品１', price: 11, unit: '件'});
    spyOn(operatecategorieservice,'loadcategories').andReturn([{id:1,name:'测试1'},{id:2,name:'测试2'}]);

    createController();
    expect($scope.itemList.name).toBe('用品１');
    expect($scope.categories[0].name).toBe('测试1');
    expect($scope.category.name).toBe('测试1');
  });

  it('modifyGoods', function () {
    spyOn(operateGoodsItems,'getGoodsItemsByBarcode').andReturn({barcode: 'ITEM00005', category: '1', name: '用品１', price: 11, unit: '件'});
    spyOn(operatecategorieservice,'loadcategories').andReturn([{id:1,name:'测试1'},{id:2,name:'测试2'}]);
    spyOn(operateGoodsItems, 'modifyGoods');
    createController();
    $scope.modifyGoods();
    expect(operateGoodsItems.modifyGoods).toHaveBeenCalled();
  });

});
