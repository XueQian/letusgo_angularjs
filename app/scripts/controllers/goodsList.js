'use strict';
////Angular 帮助你把构建应用的程序块划分为下面这几种类型：控制器(Controller)，指令(Directive)，
////工厂(Factory)，过滤器(Filter)，服务(Service)和视图(View) (就是模板)。它们被组织为模块形式，
////之后可以被另一个引用。每种类型有不同的作用。视图处理 UI，控制器处理 UI 背后的逻辑，服务用来处理
////和后台的通信，并且将共通的有关联的功能组件结合在一起，而指令通过定义新的元素，属性和行为，很容易的
////构造可重用的组件，以及HTML扩展。

angular.module('angularLeteusgoApp')
  .controller('goodsListCtrl', function ($scope, goodsItemService) {

    var itemList = goodsItemService.loadItem();
    var cartList = goodsItemService.get('cartProduct');

    goodsItemService.set('itemList', itemList);
    goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

    $scope.products = goodsItemService.get('itemList');
    $scope.$emit('_parent_totalCount');

    $scope.addToCart = function (productItem) {

      if (cartList === null) {
        cartList = [];
      }

      cartList = goodsItemService.addToCartList(productItem, cartList);

      goodsItemService.set('cartProduct', cartList);
      goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

      $scope.$emit('_parent_totalCount');
    };
  });


