describe('WebDevController', function () {
    beforeEach(module('webDev'));

    var controller, scope, webDevController;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;

        scope = $rootScope.$new();
        webDevController = $controller('WebDevController', { 
            '$rootScope' : $rootScope,
            $scope: scope 
        });
    }));

    it('should exist', function() {
        expect(webDevController).toBeDefined();
    });

    // A set of tests for our .post() method
    describe('.post()', function () {
        it('should exist', function () {
            expect(scope.post).toBeDefined();
        });

        it('should add two numbers 2 + 2', function () {
            //scope.mathData.operation = 'add';
            
            expect(scope.post).toBeDefined();
        });
    })

});