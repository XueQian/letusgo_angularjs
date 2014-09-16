'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, GoodsItemService, Operatecategorieservice, operateGoodsItems, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      operateGoodsItems = $injector.get('operateGoodsItems');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice,
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
    spyOn(Operatecategorieservice, 'modifyCategory');

    $scope.modifyCategory();

    expect(Operatecategorieservice.modifyCategory).toHaveBeenCalledWith($scope.category);

  });

});
