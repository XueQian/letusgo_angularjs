'use strict';

describe("manageGoodsItemsCtrl", function () {

  var createController, $scope, goodsItemService, operateCategoryService, operateGoodsItems, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      operateCategoryService = $injector.get('operateCategoryService');
      operateGoodsItems = $injector.get('operateGoodsItems');
      localStorageService = $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageGoodsItemsCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operateCategoryService: operateCategoryService,
          operateGoodsItems: operateGoodsItems,
          localStorageService: localStorageService

        });
      };
    });
  });

  it('$emit', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('_parent_manageActive');
  });

  it('getCategoryName', function () {
    var id = 0;

    createController();

    spyOn(operateCategoryService, 'getCategorysById').andReturn({id: 0, name: '0'});
    $scope.getCategoryName(id);

    expect($scope.getCategoryName(id)).toBe('0');
  });

  it('deleteCategory', function () {

    var index = 1;
    $scope.products = [
      {barcode: 1, name: '测试1'},
      {barcode: 2, name: '测试2'}
    ];
    createController();

    spyOn($scope.products, 'splice');
    spyOn(goodsItemService, 'set');
    $scope.deleteCategory(index);

    expect($scope.products.splice).toHaveBeenCalledWith(index, 1);
    expect(goodsItemService.set).toHaveBeenCalledWith('itemLists', $scope.products);

  });

  it('addGoodsItems', function () {
    $scope.item = {};
    $scope.itemLists = [
      {}
    ];
    createController();

    spyOn(operateGoodsItems, 'addGoodsItems');
    $scope.addGoodsItems();

    expect(operateGoodsItems.addGoodsItems).toHaveBeenCalledWith($scope.item, $scope.itemLists);

  })

});
