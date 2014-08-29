'use strict';

angular.module('angularLeteusgoApp')
  .service('goodsItemService', function (localStorageService) {
    this.loadItem = function () {

      return [
        {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '服装鞋包', name: '服装2', price: 11, unit: '件'},
        {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'},
        {barcode: 'ITEM00003', category: '全球美食', name: '美食１', price: 1100, unit: '件'},
        {barcode: 'ITEM00004', category: '护肤彩妆', name: '护肤１', price: 101, unit: '件'},
        {barcode: 'ITEM00005', category: '母婴用品', name: '用品１', price: 11, unit: '件'}
      ]
    };

    this.getTotalCount = function (cartLists) {
      return _.reduce(_.pluck(cartLists, 'count'), function (count1, count2) {
        return count1 + count2;
      }) || 0;
    };

    this.addToCartList = function (product, cartLists) {

      var hasExistItem = _.any(cartLists, function (cartList) {
        return product.name === cartList.item.name;
      });

      if (hasExistItem) {
        _(cartLists).forEach(function (cartList) {
          if (product.name === cartList.item.name) {
            cartList.count++;
          }
        });
      } else {
        cartLists.push({item: product, count: 1});
      }

      return cartLists;
    };

    this.get = function (key) {
      return localStorageService.get(key);
    };

    this.set = function (key, value) {
      return localStorageService.set(key, value);
    };

  });

