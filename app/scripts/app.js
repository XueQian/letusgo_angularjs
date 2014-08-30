'use strict';

/**
 * @ngdoc overview
 * @name angularLeteusgoApp
 * @description
 * # angularLeteusgoApp
 *
 * Main module of the application.
 */
angular
  .module('angularLeteusgoApp', [
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
      .when('/changeCategory', {
        templateUrl: 'views/changeCategory.html',
        controller: 'changeCategoryCtrl'
      })
      .when('/changeGoodsItems', {
        templateUrl: 'views/changeGoodsItems.html',
        controller: 'changeGoodsItemsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
