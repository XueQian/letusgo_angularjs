'use strict';

describe("goodsListCtrl", function () {

  var $scope, GoodsItemService, createController, localStorageService, Operatecategorieservice;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice
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

      spyOn(GoodsItemService, 'get').andReturn(itemList);
      createController();
    });

    it('products is OK', function () {

      expect($scope.products[0].name).toEqual('服装１');
    });


  });

  describe('addToCart .set ', function () {

    it('use localStorageService .set', function () {
      var productItem = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};

      spyOn(GoodsItemService, 'set');
      createController();
      $scope.addToCart(productItem);

      expect(GoodsItemService.set.callCount).toEqual(4);

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

      spyOn(GoodsItemService, 'get').andReturn(cartList);

      createController();
      $scope.addToCart(productItem);

      expect(GoodsItemService.getTotalCount(cartList)).toBe(0);
    });

    it('getCategoryName  is ok', function () {
      var id = 0;
      var result = {id: 0, name: '服装鞋包'};
      spyOn(Operatecategorieservice, 'getcategoryById').andReturn(result);

      createController();
      expect($scope.getCategoryName(id)).toBe('服装鞋包');
    });

  });
});



