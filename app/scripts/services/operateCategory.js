'use strict';

angular.module('letusgoApp')
  .service('Operatecategorieservice', function (localStorageService) {
    this.loadcategories = function () {

      var categoryList = [
        {id: 0, name: '服装鞋包'},
        {id: 1, name: '手机数码'},
        {id: 2, name: '全球美食'},
        {id: 3, name: '护肤彩妆'},
        {id: 4, name: '母婴用品'}
      ];

      var temp = localStorageService.get('categoryList');

      if (temp) {

        return temp;
      }

      localStorageService.set('categoryList', categoryList);
      return categoryList;
    };

    this.getcategoryById = function (id, categories) {
      if (categories === null) {

        categories = localStorageService.get('categoryList');
      }
      return _.find(categories, function (category) {

        return category.id == id;
      }) || {};
    };

    this.addCategory = function (category, categoryList) {

      var hasExistCategory = _.any(categoryList, function (categoryList) {

        return category.name === categoryList.name;
      });

      if (!hasExistCategory) {

        var id = parseInt(categoryList[categoryList.length - 1].id);

        category.id = id + 1;

        categoryList.push(category);

      }

      localStorageService.set('categoryList', categoryList);
    };

    this.modifyCategory = function (category) {

      var categoryList = localStorageService.get('categoryList');

      _.forEach(categoryList, function (category1, index) {

        if (category1.id == category.id) {

          categoryList[index] = category;
        }
      });

      localStorageService.set('categoryList', categoryList);

      return category;
    };

  });










