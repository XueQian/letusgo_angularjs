'use strict';

angular
  .module('letusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexCtrl'
      })
      .when('/goodsList', {
        templateUrl: 'views/goodsList.html',
        controller: 'goodsListCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'
      })
      .when('/shoppingList', {
        templateUrl: 'views/shoppingList.html',
        controller: 'shoppingListCtrl'
      })
      .when('/manageCategory', {
        templateUrl: 'views/manageCategory.html',
        controller: 'manageCategoryCtrl'
      })
      .when('/manageGoodsItems', {
        templateUrl: 'views/manageGoodsItems.html',
        controller: 'manageGoodsItemsCtrl'
      })
      .when('/addCategory', {
        templateUrl: 'views/addCategory.html',
        controller: 'manageCategoryCtrl'
      })
      .when('/addGoodsItems', {
        templateUrl: 'views/addGoodsItems.html',
        controller: 'manageGoodsItemsCtrl'
      })
      .when('/modifyCategory/:id', {
        templateUrl: 'views/modifyCategory.html',
        controller: 'modifyCategoryCtrl'
      })
      .when('/modifyGoodsItems/:barcode', {
        templateUrl: 'views/modifyGoodsItems.html',
        controller: 'modifyGoodsItemsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
