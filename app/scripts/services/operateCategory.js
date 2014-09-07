'use strict';

angular.module('angularLeteusgoApp')
  .service('operateCategoryService', function (localStorageService,operateGoodsItems) {
    this.loadCategorys = function () {

      var categoryLists = [
        {id: 1, name: '服装鞋包'},
        {id: 2, name: '手机数码'},
        {id: 3, name: '全球美食'},
        {id: 4, name: '护肤彩妆'},
        {id: 5, name: '母婴用品'}
      ];

      var temp = localStorageService.get('categoryLists');

      if (temp) {

        return temp;
      } else {

        localStorageService.set('categoryLists', categoryLists);

        return categoryLists;
      }
    };

    this.getCategoryName = function () {

      var categoryLists = [
        {id: 1, name: '服装鞋包'},
        {id: 2, name: '手机数码'},
        {id: 3, name: '全球美食'},
        {id: 4, name: '护肤彩妆'},
        {id: 5, name: '母婴用品'}
      ];

      return categoryLists[0].name;
    }

    this.getItemsById = function (id) {
     var result =  _.find(operateGoodsItems.loadGoodsItems(),function(itemList){

        return itemList.category = id;
      });
      return result ? false : true;
    };

    this.getCategoryById = function (id) {

      var result = _.find(this.loadCategorys(), function (category) {

        return category.id == id;
      });

      return result ? result.name : id;
    };

    this.addCategory = function (category, categoryLists) {

      var hasExistCategory = _.any(categoryLists, function (categoryList) {

        return category.name === categoryList.name;
      });

      if (!hasExistCategory) {

        var id = parseInt(categoryLists[categoryLists.length - 1].id);

        category.id = ++id;

        categoryLists.push(category);

      }

      localStorageService.set('categoryLists', categoryLists);
    };

  });










