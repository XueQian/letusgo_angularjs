'use strict';

angular.module('angularLeteusgoApp')
    .controller('goodsListCtrl', function ($scope) {
        $scope.goodsLists = [
            {barcode: 'ITEM00000', category: '服装鞋包', name: '服装１', price: 11, unit: '件'},
            {barcode: 'ITEM00001', category: '服装鞋包', name: '服装2', price: 21, unit: '件'},
            {barcode: 'ITEM00000', category: '手机数码', name: '手机１', price: 110, unit: '件'},
            {barcode: 'ITEM00000', category: '全球美食', name: '美食１', price: 131, unit: '套'},
            {barcode: 'ITEM00000', category: '护肤彩妆', name: '护肤１', price: 181, unit: '件'},
            {barcode: 'ITEM00000', category: '母婴用品', name: '用品１', price: 1444, unit: '件'},
        ];


    });
