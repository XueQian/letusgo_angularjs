'use strict';

angular.module('angularLeteusgoApp')
  .service('operateCategoryService', function () {
    this.loadCategorys = function() {
      return[
        {id:1,name:'服装鞋包'},
        {id:2,name:'手机数码'},
        {id:3,name:'全球美食'},
        {id:4,name:'护肤彩妆'},
        {id:5,name:'母婴用品'}
      ];

    };
    this.getCategoryById = function(id) {
      var result = _.find(this.loadCategorys(),function(category){
        return category.id == id;
      });
      return result ? result.name: id;
    };

  });








