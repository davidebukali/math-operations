webDevApp.factory('TableRows', function (Lo) {
    var app = function () {
        var data = [];

        return {
            setData: function (row) {
                data.push(row);
            },
            resetData: function () {
                data = [];
            },
            getDataByIndex: function (index) {
                return data[index];
            },
            removeDataByIndex: function (index) {
                return data.splice(index, 1);
            },
            getAllData: function () {
                return data;
            },
            dataLength: function () {
                return data.length;
            }
        }

    }();

    return app;
});