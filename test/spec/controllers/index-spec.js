'use strict';

describe("indexCtrl", function () {

  var $scope, goodsItemService, createController, $rootScope;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('indexCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService
        });
      };
    });
  });

  it('_parent_totalCount', function () {

    spyOn(goodsItemService, 'getTotalCount').andReturn(2);

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_totalCount');
    $scope.$digest();

    expect($scope.totalCount).toBe(2);

  });

  it('_parent_totalCount===0', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_totalCount===0');
    $scope.$digest();

    expect($scope.totalCount).toBe(0);

  });

  it('_parent_totalCount===0', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_totalCount===0');
    $scope.$digest();

    expect($scope.totalCount).toBe(0);

  });

  it('_parent_indexActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_indexActive');
    $scope.$digest();

    expect($scope.indexActive).toBe(true);

  });

  it('_parent_goodsListActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_goodsListActive');
    $scope.$digest();

    expect($scope.goodsListActive).toBe(true);

  });

  it('_parent_cartActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_cartActive');
    $scope.$digest();

    expect($scope.cartActive).toBe(true);

  });

  it('_parent_manageActive', function () {

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_manageActive');
    $scope.$digest();

    expect($scope.manageActive).toBe(true);

  });
});
