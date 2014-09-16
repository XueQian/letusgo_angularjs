'use strict';

describe("manageCategoryCtrl", function () {

  var $scope, goodsItemService, createController, localStorageService, operateCategoryService, operateGoodsItems;

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
          operateGoodsItems: operateGoodsItems
        });
      };
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
      var id = 1;
      var result = true;
      spyOn(operateGoodsItems, 'getItemsById').andReturn(result);
      createController();
      expect($scope.getItemsById(id)).toBe(true);
    });
  });

  it('deleteCategory when true', function () {
    var id = 1;
    var index = 1;
    var result = true;
    $scope.categorys = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];

    createController();

    spyOn(operateGoodsItems, 'getItemsById').andReturn(result);
    spyOn($scope.categorys, 'splice');
    spyOn(goodsItemService, 'set');
    $scope.deleteCategory(index, id);

    expect(goodsItemService.set).toHaveBeenCalled();
    expect($scope.categorys.splice).toHaveBeenCalledWith(index, id);
  });

  it('deleteCategory when false', function () {
    var id = 1;
    var index = 1;
    var result = false;
    $scope.categorys = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];

    createController();

    spyOn(operateGoodsItems, 'getItemsById').andReturn(result);
    spyOn($scope.categorys, 'splice');
    spyOn(goodsItemService, 'set');
    $scope.deleteCategory(index, id);

  });

  it('addCategory', function () {
    $scope.category = {id: 1, name: '1'};
    $scope.categorys = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];
    spyOn(operateCategoryService, 'addCategory');

    createController();
    $scope.addCategory();
    expect(operateCategoryService.addCategory).toHaveBeenCalledWith($scope.category, $scope.categorys);

  });

});





