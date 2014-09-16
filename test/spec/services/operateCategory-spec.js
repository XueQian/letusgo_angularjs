'use strict';

describe("operateCategoryService", function () {

  var operateCategoryService, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      operateCategoryService = $injector.get('operateCategoryService');
      localStorageService = $injector.get('localStorageService');
    });

  });
  it('if categoryList is not null,loadCategorys', function () {
    var categoryList = '';

    spyOn(localStorageService, 'get').andReturn(categoryList);
    spyOn(localStorageService, 'set');
    operateCategoryService.loadCategorys();

    expect(localStorageService.set).toHaveBeenCalled();
  });

  describe('if categoryList is not null', function () {

    var categoryList = [
      {id: 1, name: '测试1'},
      {id: 2, name: '测试2'}
    ];
    it('loadCategorys', function () {

      spyOn(localStorageService, 'get').andReturn(categoryList);
      var result = operateCategoryService.loadCategorys();

      expect(result).toEqual([
        {id: 1, name: '测试1'},
        {id: 2, name: '测试2'}
      ]);

    });

    it('getCategorysById', function () {
      var id = 1;
      var categorys = null;
      spyOn(localStorageService, 'get').andReturn(categoryList);

      operateCategoryService.getCategorysById(id, categorys);

      expect(localStorageService.get).toHaveBeenCalledWith('categoryList');

    });

    it('addCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'set');

      operateCategoryService.addCategory(category, categoryList);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryList', categoryList);

    });

    it('modifyCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'get').andReturn(categoryList);
      spyOn(localStorageService, 'set');

      operateCategoryService.modifyCategory(category);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryList', categoryList);

    });

  });


});
