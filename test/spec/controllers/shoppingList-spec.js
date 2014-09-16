'use strict';

describe("shoppingListCtrl", function () {

  var $scope, goodsItemService, createController, cartItemService, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      cartItemService = $injector.get('cartItemService');
      localStorageService = $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('shoppingListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          cartItemService: cartItemService
        });
      };
    });
  });

  it('goodsItemService.get and getTotalMoney has been called', function () {

    var cartItem = {};

    spyOn(goodsItemService, 'get');
    spyOn(cartItemService, 'getTotalMoney');

    goodsItemService.get('cartProduct');
    cartItemService.getTotalMoney(cartItem);

    createController();

    expect(goodsItemService.get).toHaveBeenCalledWith('cartProduct');
    expect(cartItemService.getTotalMoney).toHaveBeenCalledWith(cartItem);

  });

  it('$emit', function () {

    spyOn($scope, '$emit');

    createController();

    $scope.remove();

    expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount===0');
  });

});



