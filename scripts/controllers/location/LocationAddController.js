/**
 * Created by Ioana.Popescu on 7/24/2017.
 */
hrApp.controller('LocationAddController', ['$scope', '$http', '$location', 'LocationService',
    function($scope, $http, $location, LocationService) {'use strict';

        $scope.location = {};

        $scope.requiredErrorMessage = 'Please fill out this field';

        /**
         * Reset location fields
         */
        $scope.reset = function() {
            this.location = {};
        };

        /**
         * Persist a location
         * @param location - location to be persisted
         */
        $scope.save = function(location) {
            LocationService.add(location).then(function(res) {
                $scope.location = res.data;
                $location.url('/locationView/' + $scope.location.locationId);
            }, function(err) {
                console.log('An error occurred while adding location: ' + err.status);
            });
        };

    }]);