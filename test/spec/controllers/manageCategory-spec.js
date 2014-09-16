'use strict';

describe("manageCategoryCtrl", function () {

  var $scope, GoodsItemService, createController, localStorageService, Operatecategorieservice, Operategoodsitemservice;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice,
          Operategoodsitemservice: Operategoodsitemservice
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
      spyOn(Operategoodsitemservice, 'getItemById').andReturn(result);
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

    spyOn(Operategoodsitemservice, 'getItemById').andReturn(result);
    spyOn($scope.categories, 'splice');
    spyOn(GoodsItemService, 'set');
    $scope.deleteCategory(index, id);

    expect(GoodsItemService.set).toHaveBeenCalled();
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

    spyOn(Operategoodsitemservice, 'getItemById').andReturn(result);
    spyOn($scope.categories, 'splice');
    spyOn(GoodsItemService, 'set');
    $scope.deleteCategory(index, id);

  });

  it('addCategory', function () {
    $scope.category = {id: 1, name: '1'};
    $scope.categories = [
      {id: 1, name: '1'},
      {id: 2, name: '2'}
    ];
    spyOn(Operatecategorieservice, 'addCategory');

    createController();
    $scope.addCategory();
    expect(Operatecategorieservice.addCategory).toHaveBeenCalledWith($scope.category, $scope.categories);

  });

});





