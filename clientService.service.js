// rest services for CRUD operation

(function() {

  var app = angular.module('clientService', []);

  app.service('sharedModels', ['$http', '$q',
    'SERVICES_CONSTANTS',
    function($http, $q, SERVICES_CONSTANTS) {
      // this will return a client list ,method
      this.getClientsData = function() {
        var deferred = $q.defer();
        $http({
          method: 'get',
          url: SERVICES_CONSTANTS.url
        }).then(function(response) {
          deferred.resolve(response.data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };
      
      // utiltity for getting filtered list
      this.getFilteredData =function(clientList,val){
       var filteredList= clientList.filter(function(item) {
          var firstName = item.name.split(" ")[0];
         var lastName = item.name.split(" ")[1];
        return item.name.toLowerCase().indexOf(val.toLowerCase()) === 0 || firstName.toLowerCase().indexOf(val.toLowerCase()) === 0|| lastName.toLowerCase().indexOf(val.toLowerCase()) === 0  ||  item.policy.indexOf(val) === 0;
      });
      return filteredList;
      }

    }
  ]);

})();