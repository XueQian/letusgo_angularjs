'use strict';

angular.module('angularLeteusgoApp')
    .service('loadItemService', function () {
        this.loadItem = function () {
            return [
                {'barcode': 'ITEM00000', 'category': '服装鞋包', 'name': '服装１', 'price': 11, 'unit': '件'},
                {'barcode': 'ITEM00001', 'category': '服装鞋包', 'name': '服装2', 'price': 11, 'unit': '件'},
                {'barcode': 'ITEM00002', 'category': '手机数码', 'name': '手机１', 'price': 1111, 'unit': '件'},
                {'barcode': 'ITEM00003', 'category': '全球美食', 'name': '美食１', 'price': 1100, 'unit': '件'},
                {'barcode': 'ITEM00004', 'category': '护肤彩妆', 'name': '护肤１', 'price': 101, 'unit': '件'},
                {'barcode': 'ITEM00005', 'category': '母婴用品', 'name': '用品１', 'price': 11, 'unit': '件'}
            ]
        };
    });
