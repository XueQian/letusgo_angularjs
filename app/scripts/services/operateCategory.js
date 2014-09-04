'use strict';

angular.module('angularLeteusgoApp')
  .service('operateCategoryService', function (localStorageService) {
    this.loadCategorys = function () {

      var categoryList = [
        {id: 1, name: '服装鞋包'},
        {id: 2, name: '手机数码'},
        {id: 3, name: '全球美食'},
        {id: 4, name: '护肤彩妆'},
        {id: 5, name: '母婴用品'}
      ];

      var temp = localStorageService.get('categoryList');

      if (temp) {

        return temp;
      } else {

        localStorageService.set('categoryList', categoryList);

        return categoryList;
      }
    };

    this.getCategoryById = function (id) {

      var result = _.find(this.loadCategorys(), function (category) {

        return category.id == id;
      });

      return result ? result.name : id;
    };

//    this.addCategory = function (category,categoryLists) {
//
//      var hasExistCategory = _.any(categoryLists, function (categoryList) {
//        return category.name === categoryList.category.name;
//      });
//      if(!hasExistCategory){
//        categoryLists.push(category);
//      }
//      return categoryLists;
//    };

  });









