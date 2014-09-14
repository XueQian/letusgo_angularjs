'use strict';

angular.module('angularLeteusgoApp')
  .service('operateCategoryService', function (localStorageService) {
    this.loadCategorys = function () {

      var categoryLists = [
        {id: 0, name: '服装鞋包'},
        {id: 1, name: '手机数码'},
        {id: 2, name: '全球美食'},
        {id: 3, name: '护肤彩妆'},
        {id: 4, name: '母婴用品'}
      ];

      var temp = localStorageService.get('categoryLists');

      if (temp) {

        return temp;
      }

        localStorageService.set('categoryLists', categoryLists);
        return categoryLists;
    };

    this.getCategorysById = function (id,categorys) {
      if (categorys === null) {

        categorys = localStorageService.get('categoryLists');
      }

      return _.find(categorys, function(category){

        return category.id == id;
      }) || {};
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

    this.modifyCategory = function (category) {

      var categoryLists = localStorageService.get('categoryLists');

      _.forEach(categoryLists, function (category1, index) {

        if (category1.id == category.id) {
          categoryLists[index] = category;
        }
      });

      localStorageService.set('categoryLists', categoryLists);
      return category;
    };

  });










