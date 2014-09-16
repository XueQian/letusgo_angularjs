'use strict';

describe("manageCategoryCtrl", function () {

  var $scope, goodsItemService, createController, localStorageService, operatecategorieservice, operateGoodsItems;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      localStorageService = $injector.get('localStorageService');
      operatecategorieservice = $injector.get('operatecategorieservice');
      operateGoodsItems = $injector.get('operateGoodsItems');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operatecategorieservice: operatecategorieservice,
          operateGoodsItems: operateGoodsItems
        });
      };
    });
  });

  describe('$emit', function () {

    it('$emit', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_manageActive');
    });
  });

  describe('getItemById', function () {

    it('getItemById', function () {
      var id = 1;
      var result = true;
      spyOn(operateGoodsItems, 'getItemById').andReturn(result);
      createController();
      expect($scope.getItemById(id)).toBe(true);
    });
  });

  it('deleteCategory when true', function () {
    var id = 1;
    var index = 1;
    var result = true;
    $scope.categories = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];

    createController();

    spyOn(operateGoodsItems, 'getItemById').andReturn(result);
    spyOn($scope.categories, 'splice');
    spyOn(goodsItemService, 'set');
    $scope.deleteCategory(index, id);

    expect(goodsItemService.set).toHaveBeenCalled();
    expect($scope.categories.splice).toHaveBeenCalledWith(index, id);
  });

  it('deleteCategory when false', function () {
    var id = 1;
    var index = 1;
    var result = false;
    $scope.categories = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];

    createController();

    spyOn(operateGoodsItems, 'getItemById').andReturn(result);
    spyOn($scope.categories, 'splice');
    spyOn(goodsItemService, 'set');
    $scope.deleteCategory(index, id);

  });

  it('addCategory', function () {
    $scope.category = {id: 1, name: '1'};
    $scope.categories = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];
    spyOn(operatecategorieservice, 'addCategory');

    createController();
    $scope.addCategory();
    expect(operatecategorieservice.addCategory).toHaveBeenCalledWith($scope.category, $scope.categories);

  });

});





