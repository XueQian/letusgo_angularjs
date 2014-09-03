'use strict';

angular.module('angularLeteusgoApp')
    .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService) {
        var itemList = goodsItemService.loadItem();
        $scope.products = goodsItemService.get('itemList');

    });
