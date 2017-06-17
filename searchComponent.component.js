//angular component for search list

angular.module('viewClientModule', []).component('viewClientList', {
  bindings: {
    filteredList: '<',
    updateClientsDetail: '&'
  },
  controller: clientContainerController,
  controllerAs: 'ctrl',
  templateUrl: 'client-search-list.html'
});

//controller 
function clientContainerController($scope) {


}