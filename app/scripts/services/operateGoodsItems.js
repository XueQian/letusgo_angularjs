'use strict';

angular.module('letusgoApp')
  .service('operateGoodsItems', function (localStorageService) {
    this.loadGoodsItems = function () {

      var itemLists = [
        {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '0', name: '服装2', price: 11, unit: '件'},
        {barcode: 'ITEM00002', category: '1', name: '手机１', price: 1111, unit: '件'},
        {barcode: 'ITEM00003', category: '2', name: '美食１', price: 1100, unit: '件'},
        {barcode: 'ITEM00004', category: '3', name: '护肤１', price: 101, unit: '件'},
        {barcode: 'ITEM00005', category: '4', name: '用品１', price: 11, unit: '件'}
      ];

      var temp = localStorageService.get('itemLists');

      if (temp) {

        return temp;
      }

      localStorageService.set('itemLists', itemLists);

      return itemLists;

    };
    this.getItemsById = function (id) {

      var result = _.find(this.loadGoodsItems(), function (itemList) {

        return itemList.category == id;
      });

      return result ? false : true;
    };

    this.addGoodsItems = function (item, itemLists) {

      item.category = item.category.id;

      var hasExistGoodsItems = _.any(itemLists, function (itemList) {

        return item.name === itemList.name;

      });

      if (!hasExistGoodsItems) {

        var barcode = itemLists[itemLists.length - 1].barcode.substring(8);

        item.barcode = itemLists[itemLists.length - 1].barcode.substring(0, 8) + (++barcode);

        itemLists.push(item);

      }
      localStorageService.set('itemLists', itemLists);
    };

    this.getGoodsItemsByBarcode = function (barcode) {
      var itemLists = localStorageService.get('itemLists');

      return _.find(itemLists, {barcode: barcode}) || {};
    };

    this.modifyGoods = function (itemList) {
      var itemLists = localStorageService.get('itemLists');

      _.forEach(itemLists, function (item, index) {

        if (item.barcode === itemList.barcode) {
          itemLists[index] = itemList;
        }
      });

      localStorageService.set('itemLists', itemLists);

      return itemList;
    }
  });

