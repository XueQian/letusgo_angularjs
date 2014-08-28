'use strict';

describe("goodsListCtrl", function () {

    var $scope, goodsItemService, createController;

    beforeEach(function () {
        module('angularLeteusgoApp');
        inject(function ($injector) {
            $scope = $injector.get('$rootScope').$new();
            goodsItemService = $injector.get('goodsItemService');
            var $controller = $injector.get('$controller');
            createController = function () {
                return $controller('goodsListCtrl', {
                    $scope: $scope,
                    goodsItemService: goodsItemService
                });
            };
        });
    });

    describe('operate itemList', function () {
        var itemList;
        beforeEach(function () {
            itemList= [{barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}];
            spyOn(goodsItemService,'get').andReturn(itemList);
            createController();
        });
        it('products is OK', function () {
            expect($scope.products).toEqual([{barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}]);
        });
        it('use localStorageService .set', function () {
            expect($scope.products).toEqual([{barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}]);
        });

    });







});