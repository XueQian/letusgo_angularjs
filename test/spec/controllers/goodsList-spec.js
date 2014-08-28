'use strict';

describe("goodsListCtrl", function () {

    var $scope, createController, localStorageService, loadItemService,goodsItemService;

    beforeEach(function () {
        module('angularLeteusgoApp');

        inject(function ($injector) {

            $scope = $injector.get('$rootScope').$new();
            localStorageService = $injector.get('localStorageService');
            loadItemService = $injector.get('loadItemService');
            goodsItemService = $injector.get('goodsItemService');

            var $controller = $injector.get('$controller');

            createController = function () {
                return $controller('goodsListCtrl', {
                    $scope: $scope,
                    localStorageService: localStorageService,
                    loadItemService: loadItemService,
                    goodsItemService: goodsItemService
                });
            };
        });
    });

    describe('title', function () {
        beforeEach(function () {
            createController();
        });
        spyOn(localStorageService,'get').andReturn(storedPlans);

        it('should has title "修改会议基础信息"', function () {
            createController();
            expect($scope.title).toEqual('修改会议基础信息');
        });
    });







});