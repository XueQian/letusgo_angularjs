'use strict';

angular.module('angularLeteusgoApp')
    .controller('changeGoodsItemsCtrl', function ($scope, goodsItemService) {
        var itemList = goodsItemService.loadItem();
        $scope.products = goodsItemService.get('itemList');

    });
