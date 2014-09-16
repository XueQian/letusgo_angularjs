'use strict';

describe("indexCtrl", function () {

  var $scope, GoodsItemService, createController, $rootScope;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('indexCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService
        });
      };
    });
  });

  it('parent_totalCount', function () {

    spyOn(GoodsItemService, 'getTotalCount').andReturn(2);

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_totalCount');
    $scope.$digest();

    expect($scope.totalCount).toBe(2);

  });

  it('parent_totalCount===0', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_totalCount===0');
    $scope.$digest();

    expect($scope.totalCount).toBe(0);

  });

  it('parent_totalCount===0', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_totalCount===0');
    $scope.$digest();

    expect($scope.totalCount).toBe(0);

  });

  it('parent_indexActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_indexActive');
    $scope.$digest();

    expect($scope.indexActive).toBe(true);

  });

  it('parent_goodsListActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_goodsListActive');
    $scope.$digest();

    expect($scope.goodsListActive).toBe(true);

  });

  it('parent_cartActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_cartActive');
    $scope.$digest();

    expect($scope.cartActive).toBe(true);

  });

  it('parent_manageActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('parent_manageActive');
    $scope.$digest();

    expect($scope.manageActive).toBe(true);

  });
});
