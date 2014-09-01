'use strict';

angular.module('angularLeteusgoApp')
  .controller('changeCategoryCtrl', function ($scope, goodsItemService) {

    var itemList = goodsItemService.loadItem();
    $scope.products = goodsItemService.get('itemList');

  });
