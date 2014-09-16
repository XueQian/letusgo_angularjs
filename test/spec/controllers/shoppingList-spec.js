'use strict';

describe("shoppingListCtrl", function () {

  var $scope, goodsItemService, createController, CartItemService, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      goodsItemService = $injector.get('goodsItemService');
      CartItemService = $injector.get('CartItemService');
      localStorageService = $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('shoppingListCtrl', {
          $scope: $scope,
          goodsItemService: goodsItemService,
          CartItemService: CartItemService
        });
      };
    });
  });

  it('goodsItemService.get and getTotalMoney has been called', function () {

    var cartItem = {};

    spyOn(goodsItemService, 'get');
    spyOn(CartItemService, 'getTotalMoney');

    goodsItemService.get('cartProduct');
    CartItemService.getTotalMoney(cartItem);

    createController();

    expect(goodsItemService.get).toHaveBeenCalledWith('cartProduct');
    expect(CartItemService.getTotalMoney).toHaveBeenCalledWith(cartItem);

  });

  it('$emit', function () {

    spyOn($scope, '$emit');

    createController();

    $scope.remove();

    expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount===0');
  });

});



