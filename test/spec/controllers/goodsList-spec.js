'use strict';

describe("goodsListCtrl", function () {

  var $scope, goodsItemService, createController, localStorageService;

  beforeEach(function () {

    module('angularLeteusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      localStorageService =  $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          localStorageService: localStorageService
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

  describe('addToCart', function () {

    it('use localStorageService .set', function () {
      var productItem  ={barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};

      spyOn(localStorageService, 'set');
      createController();
      $scope.addToCart(productItem);

      expect(localStorageService.set.callCount).toEqual(4);

    });

    it('$emit', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('_parent_totalCount');

    });

  });

});



