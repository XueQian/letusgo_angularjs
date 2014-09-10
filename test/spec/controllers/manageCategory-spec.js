'use strict';

describe("manageCategoryCtrl", function () {

  var $scope, goodsItemService, createController, localStorageService,operateCategoryService,operateGoodsItems;

  beforeEach(function () {

    module('angularLeteusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      localStorageService = $injector.get('localStorageService');
      operateCategoryService = $injector.get('operateCategoryService');
      operateGoodsItems = $injector.get('operateGoodsItems');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operateCategoryService: operateCategoryService,
          operateGoodsItems:operateGoodsItems
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

});
