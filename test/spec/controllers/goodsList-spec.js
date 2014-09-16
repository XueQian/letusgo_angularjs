'use strict';

describe("goodsListCtrl", function () {

  var $scope, goodsItemService, createController, localStorageService, operateCategoryService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      localStorageService = $injector.get('localStorageService');
      operateCategoryService = $injector.get('operateCategoryService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operateCategoryService: operateCategoryService
        });
      };
    });
  });

  describe('operate itemList', function () {

    var itemList;

    beforeEach(function () {

      itemList = [
        {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}
      ];

      spyOn(goodsItemService, 'get').andReturn(itemList);
      createController();
    });

    it('products is OK', function () {

      expect($scope.products[0].name).toEqual('服装１');
    });


  });

  describe('addToCart .set ', function () {

    it('use localStorageService .set', function () {
      var productItem = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};

      spyOn(goodsItemService, 'set');
      createController();
      $scope.addToCart(productItem);

      expect(goodsItemService.set.callCount).toEqual(4);

    });

    it('$emit', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
      expect($scope.$emit).toHaveBeenCalledWith('parent_goodsListActive');


    });

    it('addToCart  is ok', function () {

      var productItem = {};

      var cartList = null;

      spyOn(goodsItemService, 'get').andReturn(cartList);

      createController();
      $scope.addToCart(productItem);

      expect(goodsItemService.getTotalCount(cartList)).toBe(0);
    });

    it('getCategoryName  is ok', function () {
      var id = 0;
      var result = {id: 0, name: '服装鞋包'};
      spyOn(operateCategoryService, 'getCategorysById').andReturn(result);

      createController();
      expect($scope.getCategoryName(id)).toBe('服装鞋包');
    });

  });
});



