'use strict';

describe("operateCategoryService", function () {

  var operateCategoryService, localStorageService;

  beforeEach(function () {
    module('angularLeteusgoApp');

    inject(function ($injector) {

      operateCategoryService = $injector.get('operateCategoryService');
      localStorageService = $injector.get('localStorageService');
    });

  });
  it('if categoryLists is not null,loadCategorys', function () {
    var categoryLists = '';

    spyOn(localStorageService, 'get').andReturn(categoryLists);
    spyOn(localStorageService, 'set');
    operateCategoryService.loadCategorys();

    expect(localStorageService.set).toHaveBeenCalled();
  });

  describe('if categoryLists is not null', function () {

    var categoryLists = [
      {id: 1, name: '测试1'},
      {id: 2, name: '测试2'}
    ];
    it('loadCategorys', function () {

      spyOn(localStorageService, 'get').andReturn(categoryLists);
      var result = operateCategoryService.loadCategorys();

      expect(result).toEqual([
        {id: 1, name: '测试1'},
        {id: 2, name: '测试2'}
      ]);

    });

    it('getCategorysById', function () {
      var id = 1;
      var categorys = null;
      spyOn(localStorageService, 'get').andReturn(categoryLists);

      operateCategoryService.getCategorysById(id, categorys);

      expect(localStorageService.get).toHaveBeenCalledWith('categoryLists');

    });

    it('addCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'set');

      operateCategoryService.addCategory(category, categoryLists);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryLists', categoryLists);

    });

    it('modifyCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'get').andReturn(categoryLists);
      spyOn(localStorageService, 'set');

      operateCategoryService.modifyCategory(category);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryLists', categoryLists);

    });

  });


});
