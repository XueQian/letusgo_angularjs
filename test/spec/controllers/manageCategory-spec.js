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

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operateCategoryService: operateCategoryService,
          operateGoodsItems:operateGoodsItems
        });
      };
    });
  });

  xdescribe('operate itemList', function () {

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
  describe('$emit', function () {

    it('$emit', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('_parent_manageActive');
    });
  });

  describe('getItemsById', function () {

    it('getItemsById', function () {
      var id = 1 ;
      var result = true;
      spyOn(operateGoodsItems, 'getItemsById').andReturn(result);
      createController();
      expect($scope.getItemsById(id)).toBe(true);
    });
  });

  it('getCategoryName  is ok', function () {
    var id = 0;
    var index = 2;
    var result = true;

    spyOn(operateGoodsItems, 'getItemsById').andReturn(result);
//    spyOn(operateCategoryService,'loadCategorys').andReturn([{id:0,name:'测试1'},{id:1,name:'测试2'}]);
//    spyOn(goodsItemService,'set');
    createController();
    $scope.deleteCategory(index,id);
//    expect($scope.deleteCategory).toHaveBeenCalledWith('index,id');
    //expect($scope.categorys.splice).toHaveBeenCalledWith(index,1);
    //expect(goodsItemService.set).toHaveBeenCalledWith('categoryLists', $scope.categorys);

   // expect(getItemsById(id)).toBe(true);
  });

});



