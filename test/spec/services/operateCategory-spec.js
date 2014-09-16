'use strict';

describe("operatecategorieservice", function () {

  var operatecategorieservice, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      operatecategorieservice = $injector.get('operatecategorieservice');
      localStorageService = $injector.get('localStorageService');
    });

  });
  it('if categoryList is not null,loadcategories', function () {
    var categoryList = '';

    spyOn(localStorageService, 'get').andReturn(categoryList);
    spyOn(localStorageService, 'set');
    operatecategorieservice.loadcategories();

    expect(localStorageService.set).toHaveBeenCalled();
  });

  describe('if categoryList is not null', function () {

    var categoryList = [
      {id: 1, name: '测试1'},
      {id: 2, name: '测试2'}
    ];
    it('loadcategories', function () {

      spyOn(localStorageService, 'get').andReturn(categoryList);
      var result = operatecategorieservice.loadcategories();

      expect(result).toEqual([
        {id: 1, name: '测试1'},
        {id: 2, name: '测试2'}
      ]);

    });

    it('getcategoryById', function () {
      var id = 1;
      var categories = null;
      spyOn(localStorageService, 'get').andReturn(categoryList);

      operatecategorieservice.getcategoryById(id, categories);

      expect(localStorageService.get).toHaveBeenCalledWith('categoryList');

    });

    it('addCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'set');

      operatecategorieservice.addCategory(category, categoryList);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryList', categoryList);

    });

    it('modifyCategory', function () {
      var category = {id: 1, name: '1'};
      spyOn(localStorageService, 'get').andReturn(categoryList);
      spyOn(localStorageService, 'set');

      operatecategorieservice.modifyCategory(category);

      expect(localStorageService.set).toHaveBeenCalledWith('categoryList', categoryList);

    });

  });


});
