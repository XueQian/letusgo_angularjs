'use strict';

describe("indexCtrl", function () {

  var $scope, goodsItemService, createController,$rootScope;

  beforeEach(function () {

    module('angularLeteusgoApp');

    inject(function ($injector) {

      $rootScope=$injector.get('$rootScope');
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

  it('parent ctrl is OK1',function(){

    spyOn(goodsItemService,'getTotalCount').andReturn(2);

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_totalCount');
    $scope.$digest();

    expect($scope.totalCount).toBe(2);

  });

  it('parent ctrl is OK2',function(){

    createController();
    $scope.$digest();

    $rootScope.$broadcast('_parent_totalCount===0');
    $scope.$digest();

    expect($scope.totalCount).toBe(0);

  });
});
