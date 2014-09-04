'use strict';

angular.module('angularLeteusgoApp')
  .service('operateCategoryService', function (localStorageService) {
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

    this.getCategoryById = function (id) {

      var result = _.find(this.loadCategorys(), function (category) {

        return category.id == id;
      });

      return result ? result.name : id;
    };

    this.addCategory = function (category,categoryLists) {

      var hasExistCategory = _.any(categoryLists, function (categoryList) {

        return category.name === categoryList.name;
      });

      if(!hasExistCategory){

        categoryLists.push(category);
      }

      localStorageService.set('categoryLists',categoryLists);
    };

  });

//$scope.id = parseInt($scope.categories[$scope.categories.length-1].id);
//$scope.add = function(){
//  if(!$scope.name){return;}
//  var category = {};
//  category.id = ++$scope.id;
//  category.name = $scope.name;
//  $scope.categories.push(category);
//};








