'use strict';

angular.module('angularLeteusgoApp')
  .service('operateGoodsItems', function (localStorageService) {
    this.loadGoodsItems = function () {

      var itemLists = [
        {barcode: 'ITEM00000', category: '1', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '1', name: '服装2', price: 11, unit: '件'},
        {barcode: 'ITEM00002', category: '2', name: '手机１', price: 1111, unit: '件'},
        {barcode: 'ITEM00003', category: '3', name: '美食１', price: 1100, unit: '件'},
        {barcode: 'ITEM00004', category: '4', name: '护肤１', price: 101, unit: '件'},
        {barcode: 'ITEM00005', category: '5', name: '用品１', price: 11, unit: '件'}
      ];

      var temp = localStorageService.get('itemLists');

      if (temp) {

        return temp;
      } else {

        localStorageService.set('itemLists', itemLists);
        return itemLists;
      }
    };

//    this.addGoodsItems = function (item, itemList) {
//
//      var hasExistGoodsItems = _.any(categoryLists, function (categoryList) {
//
//        return category.name === categoryList.name;
//      });
//
//      if (!hasExistCategory) {
//
//        var id = parseInt(categoryLists[categoryLists.length - 1].id);
//
//        category.id = ++id;
//
//        categoryLists.push(category);
//
//      }
//
//      localStorageService.set('categoryLists', categoryLists);
//    };


  });
