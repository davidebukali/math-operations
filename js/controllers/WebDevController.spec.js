describe('WebDevController', function () {
    beforeEach(module('webDev'));

    var $httpBackend,
        promise,
        successCallback,
        errorCallback,
        validationErrorCallback,
        validationSuccessCallback,
        httpController,
        $rootScope,
        createController,
        mathsUrl = 'http://api.mathjs.org/v4/',
        $Lo;

    beforeEach(inject(function ($injector, Lo) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        successCallback = jasmine.createSpy('SuccessMathOperation');
        errorCallback = jasmine.createSpy('ErrorMathOperation');

        $Lo = Lo;
        var $controller = $injector.get('$controller');
        createController = function () {
            return $controller('WebDevController', { '$scope': $rootScope });
        };
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should exist', function () {
        var httpController = createController();
        expect(httpController).toBeDefined();
    });

    it('Adds two numbers 2 + 2', function (done) {
        var data = {"result":"4","error":null};
        $httpBackend.expectPOST(mathsUrl).respond(data);
        var httpController = createController();
        
        $rootScope.mathData.operation = 'add';        
        $rootScope.mathData.numberOne = 2;    
        $rootScope.mathData.numberTwo = 2;    
        promise = $rootScope.post();
        promise.then(successCallback, errorCallback);
    
        $httpBackend.flush();
    
        expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
        expect(errorCallback).not.toHaveBeenCalled();
    
        $rootScope.$digest();
        done();
      });

      it('Subtracts two numbers 4 - 2', function (done) {
        var data = {"result":"2","error":null};
        $httpBackend.expectPOST(mathsUrl).respond(data);
        var httpController = createController();
        
        $rootScope.mathData.operation = 'sub';        
        $rootScope.mathData.numberOne = 4;    
        $rootScope.mathData.numberTwo = 2;    
        promise = $rootScope.post();
        promise.then(successCallback, errorCallback);
    
        $httpBackend.flush();
    
        expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
        expect(errorCallback).not.toHaveBeenCalled();
    
        $rootScope.$digest();
        done();
      });

      it('Multiplies two numbers 3 * 5', function (done) {
        var data = {"result":"15","error":null};
        $httpBackend.expectPOST(mathsUrl).respond(data);
        var httpController = createController();
        
        $rootScope.mathData.operation = 'mul';        
        $rootScope.mathData.numberOne = 3;    
        $rootScope.mathData.numberTwo = 5;    
        promise = $rootScope.post();
        promise.then(successCallback, errorCallback);
    
        $httpBackend.flush();
    
        expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
        expect(errorCallback).not.toHaveBeenCalled();
    
        $rootScope.$digest();
        done();
      });

      it('Divides two numbers 12 / 6', function (done) {
        var data = {"result":"2","error":null};
        $httpBackend.expectPOST(mathsUrl).respond(data);
        var httpController = createController();
        
        $rootScope.mathData.operation = 'div';        
        $rootScope.mathData.numberOne = 12;    
        $rootScope.mathData.numberTwo = 6;    
        promise = $rootScope.post();
        promise.then(successCallback, errorCallback);
    
        $httpBackend.flush();
    
        expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
        expect(errorCallback).not.toHaveBeenCalled();
    
        $rootScope.$digest();
        done();
      });

});