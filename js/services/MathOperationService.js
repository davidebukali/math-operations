webDevApp.service('Maths', function (httpService) {
    var url = 'http://api.mathjs.org/v4/';

    var add = function add(numberOne, numberTwo) {
        return httpService.post(url, {
            "expr": numberOne + "+" + numberTwo,
            "precision": 14
        });
    }

    var subtract = function subtract(numberOne, numberTwo) {
        return httpService.post(url, {
            "expr": numberOne + "-" + numberTwo,
            "precision": 14
        });
    }

    var divide = function divide(numberOne, numberTwo) {
        return httpService.post(url, {
            "expr": numberOne + "/" + numberTwo,
            "precision": 14
        });
    }

    var multiply = function multiply(numberOne, numberTwo) {
        return httpService.post(url, {
            "expr": numberOne + "*" + numberTwo,
            "precision": 14
        });
    }

    return ({
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    });
});