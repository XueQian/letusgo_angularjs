'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, GoodsItemService, operatecategorieservice, operateGoodsItems, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      operatecategorieservice = $injector.get('operatecategorieservice');
      operateGoodsItems = $injector.get('operateGoodsItems');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
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
