webDevApp.controller('WebDevController', function WebDevController(
    $scope,
    Maths,
    TableRows) {
    var vm = $scope;
    vm.mathData = {
        operation: "add"
    };

    vm.post = function (event) {
        var numberOne = document.getElementsByName("numberOne")[0].value,
            numberTwo = document.getElementsByName("numberTwo")[0].value;
        if(numberOne.length == 0 || numberTwo.length == 0) {
            alert("Both number one and two are required");
        }else {
            switch (vm.mathData.operation) {
                case 'add':
                    Maths.add(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) + parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
    
                    }, function (err) {
                        console.log("Error Didnot Add " + JSON.stringify(err));
                        alert("Error Didnot Add "+JSON.stringify(err));
                    });
                    break;
                case 'sub':
                    Maths.subtract(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) - parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
    
                    }, function (err) {
                        console.log("Error Didnot Subtract " + JSON.stringify(err));
                        alert("Error Didnot Subtract "+JSON.stringify(err));
                    });
                    break;
                case 'mul':
                    Maths.multiply(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) * parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
    
                    }, function (err) {
                        console.log("Error Didnot Multiply " + JSON.stringify(err));
                        alert("Error Didnot Multiply "+JSON.stringify(err));
                    });
                    break;
                case 'div':
                    Maths.divide(numberOne, numberTwo).then(function (res) {
                        var clientResult = parseInt(numberOne) / parseInt(numberTwo);
                        TableRows.setData(setUpRowData(numberOne, numberTwo, clientResult, res.data.result));
                        $scope.$broadcast("mathResult");
    
                    }, function (err) {
                        console.log("Error Didnot Divide " + JSON.stringify(err));
                        alert("Error Didnot Divide "+JSON.stringify(err));
                    });
                    break;
                default:
                    break;
            }
        }
    }

    function setUpRowData(numberOne, numberTwo, clientResult, apiResult) {
        var select = document.getElementById("operation"),
            apiResult = modifyApiResult(apiResult);
        return {
            numberOne: numberOne,
            numberTwo: numberTwo,
            operation: select.options[select.selectedIndex].value,
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