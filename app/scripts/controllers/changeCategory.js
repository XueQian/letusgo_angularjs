'use strict';

angular.module('angularLeteusgoApp')
    .controller('changeCategoryCtrl', function ($scope, goodsItemService) {

        var itemList = goodsItemService.loadItem();
        //goodsItemService.set('itemList', itemList);
        $scope.products = goodsItemService.get('itemList');

    });
