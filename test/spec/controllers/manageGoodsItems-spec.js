'use strict';

describe("manageGoodsItemsCtrl", function () {

  var createController, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      localStorageService = $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageGoodsItemsCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice,
          Operategoodsitemservice: Operategoodsitemservice,
          localStorageService: localStorageService

        });
      };
    });
  });

  it('$emit', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parent_manageActive');
  });

  it('getCategoryName', function () {
    var id = 0;

    createController();

    spyOn(Operatecategorieservice, 'getcategoryById').andReturn({id: 0, name: '0'});
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
    spyOn(GoodsItemService, 'set');
    $scope.deleteCategory(index);

    expect($scope.products.splice).toHaveBeenCalledWith(index, 1);
    expect(GoodsItemService.set).toHaveBeenCalledWith('itemList', $scope.products);

  });

  it('addGoodsItems', function () {
    $scope.item = {};
    $scope.itemList = [
      {}
    ];
    createController();

    spyOn(Operategoodsitemservice, 'addGoodsItems');
    $scope.addGoodsItems();

    expect(Operategoodsitemservice.addGoodsItems).toHaveBeenCalledWith($scope.item, $scope.itemList);

  })

});
