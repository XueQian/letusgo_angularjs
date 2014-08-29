'use strict';

describe("goodsListCtrl", function () {

  var $scope, goodsItemService, createController;

  beforeEach(function () {
    module('angularLeteusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller('goodsListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService
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
//        it('use localStorageService .set', function () {
//            expect($scope.products).toEqual([
//                {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}
//            ]);
//        });

  });

  describe('addToCart', function () {




  });


});

//        var product= {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};
//        var cartLists=[{item:{barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'},count:1}];

//        it('after addToCart(),set() is called 1 time',function(){
//            spyOn(localStorageService, 'set');
//
//            goodsItemService.addToCartList(product,cartLists);
//
//            expect(localStorageService.set.callCount).toEqual(1);
//
//        });
