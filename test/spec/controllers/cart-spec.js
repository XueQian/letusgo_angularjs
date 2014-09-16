'use strict';

describe("cartCtrl", function () {

  var $scope, GoodsItemService, createController, localStorageService, CartItemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
      CartItemService = $injector.get('CartItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('cartCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          CartItemService: CartItemService
        });
      };
    });
  });

  describe('$emit', function () {
    it('$emit', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    });
  });

  describe('operate cartItems', function () {

    var cartItems;

    beforeEach(function () {

      cartItems = [
        {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}
      ];

    });

    it('cartItems is OK', function () {
      spyOn(GoodsItemService, 'get').andReturn(cartItems);
      spyOn(CartItemService, 'getTotalMoney').andReturn(1);

      createController();
      expect($scope.cartItems[0].name).toEqual('服装１');
      expect($scope.totalMoney).toEqual(1);

    });

    it('use localStorageService .set', function () {
      var item_ = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
      spyOn(GoodsItemService, 'set');

      createController();

      $scope.changeCount(item_);

      expect(GoodsItemService.set.callCount).toEqual(2);
    });

    it('same name, count=count', function () {
      var item_ =
      {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1};

      spyOn(CartItemService, 'getTotalMoney');

      var cartItems = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 0}
      ];
      spyOn(GoodsItemService, 'get').andReturn(cartItems);
      // console.log(cartItem.count);

      createController();
      $scope.changeCount(item_);
      var result = $scope.cartItems[0].count;

      expect(result).toEqual(1);
    });

  });

});



