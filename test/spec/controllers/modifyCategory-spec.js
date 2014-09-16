'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, goodsItemService, operatecategorieservice, operateGoodsItems, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      operatecategorieservice = $injector.get('operatecategorieservice');
      operateGoodsItems = $injector.get('operateGoodsItems');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          operatecategorieservice: operatecategorieservice,
          operateGoodsItems: operateGoodsItems,
          $routeParams: $routeParams
        });
      };
    });
  });

  it('$emit', function () {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parent_manageGoodsActive');
  });

  it('modifyCategory', function () {
    $scope.category = {};

    createController();
    spyOn(operatecategorieservice, 'modifyCategory');

    $scope.modifyCategory();

    expect(operatecategorieservice.modifyCategory).toHaveBeenCalledWith($scope.category);

  });

});
