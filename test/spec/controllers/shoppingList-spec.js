'use strict';

describe("shoppingListCtrl", function () {

  var $scope, GoodsItemService, createController, CartItemService, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      CartItemService = $injector.get('CartItemService');
      localStorageService = $injector.get('localStorageService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('shoppingListCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          CartItemService: CartItemService
        });
      };
    });
  });

  it('GoodsItemService.get and getTotalMoney has been called', function () {

    var cartItem = {};

    spyOn(GoodsItemService, 'get');
    spyOn(CartItemService, 'getTotalMoney');

    GoodsItemService.get('cartProduct');
    CartItemService.getTotalMoney(cartItem);

    createController();

    expect(GoodsItemService.get).toHaveBeenCalledWith('cartProduct');
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



