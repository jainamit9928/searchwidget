(function() {
  angular.module('viewClientModule').controller('clientController', function clientContainerController(sharedModels) {

    var vm = this;
    vm.clientList;
      // init
    var init = function() {
      vm.clientList = [];
      vm.getClientsData();
    };

  // getting data from service
    vm.getClientsData = function() {
      var def = sharedModels.getClientsData();
      def.then(function(data) {
        vm.clientList = data;
        console.log("in controller" + data);
      }, function(error) {
        $location.path('/error');
      });
    }
    init();
   
    // retrurn filtered client list
    vm.updateClientsDetail = function(val) {
     vm.filteredList = sharedModels.getFilteredData(vm.clientList,val);
    };
  });
})();