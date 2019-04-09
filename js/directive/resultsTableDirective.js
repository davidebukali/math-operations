webDevApp.directive('resultsTable', ['TableRows', function (TableRows) {
  return {
    link: function (scope, element, attrs) {
      var vm = scope;
      vm.tableRows = [];
      vm.$on("mathResult", function (event, args) {              
        vm.tableRows = TableRows.getAllData();
      });

      vm.removeRow = function(event){
        var index = angular.element(event.currentTarget).parent().data('index');
        console.log('Removing '+index);
        TableRows.removeDataByIndex(index);
      }
    },
    templateUrl: "views/resultsTemplate.html"
  };
}]);