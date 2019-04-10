webDevApp.controller('WebDevController', function WebDevController(
    $scope,
    Maths,
    TableRows,
    $q) {
    var vm = $scope;
    vm.mathData = {
        numberOne: "",
        numberTwo: "",
        operation: "add"
    };

    vm.post = function (event) {
        var defer = $q.defer();
        var numberOne = vm.mathData.numberOne,
            numberTwo = vm.mathData.numberTwo;
        if(numberOne.length == 0 || numberTwo.length == 0) {
            alert("Both number one and two are required");
        }else {
            switch (vm.mathData.operation) {
                case 'add':
                    Maths.add(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) + parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
                        defer.resolve(res.data);
                    }, function (err) {
                        console.log("Error Didnot Add " + JSON.stringify(err));
                        alert("Error Didnot Add "+JSON.stringify(err));
                        defer.reject();
                    });
                    break;
                case 'sub':
                    Maths.subtract(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) - parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
                        defer.resolve(res.data);
                    }, function (err) {
                        console.log("Error Didnot Subtract " + JSON.stringify(err));
                        alert("Error Didnot Subtract "+JSON.stringify(err));
                        defer.reject();
                    });
                    break;
                case 'mul':
                    Maths.multiply(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) * parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
                        defer.resolve(res.data);
                    }, function (err) {
                        console.log("Error Didnot Multiply " + JSON.stringify(err));
                        alert("Error Didnot Multiply "+JSON.stringify(err));
                        defer.reject();
                    });
                    break;
                case 'div':
                    Maths.divide(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) / parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
                        defer.resolve(res.data);
                    }, function (err) {
                        console.log("Error Didnot Divide " + JSON.stringify(err));
                        alert("Error Didnot Divide "+JSON.stringify(err));
                        defer.reject();
                    });
                    break;
                default:
                    break;
            }
        }
        return defer.promise;
    }

    function setUpRowData(numberOne, numberTwo, clientResult, apiResult) {
        var apiResult = modifyApiResult(apiResult);
        return {
            numberOne: numberOne,
            numberTwo: numberTwo,
            operation: vm.mathData.operation,
            clientResult: clientResult,
            apiResult: apiResult,
            passed: clientResult == apiResult ? 'Yes' : 'No'
        };
    }

    function modifyApiResult(apiResult) {
        var randomNumber = Math.round(Math.random());
        if (randomNumber == 1) {
            return Math.ceil(Math.random() * 4000);
        } else {
            return apiResult;
        }
    }
});