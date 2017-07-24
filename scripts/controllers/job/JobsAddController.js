/**
 * Created by Ioana.Popescu on 7/3/2017.
 */

hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'JobService',
    function($scope, $http, $location, JobService) {'use strict';

        $scope.job = {};

        $scope.requiredErrorMessage = 'Please fill out this field';

        /**
         * Reset job fields
         */
        $scope.reset = function() {
            this.job = {};
        };

        /**
         * Persist a job
         * @param job - job to be persisted
         */
        $scope.save = function(job) {
            JobService.add(job).then(function(res) {
                $scope.job = res.data;
                $location.url('/jobView/' + $scope.job.jobId);
            }, function(err) {
                console.log('An error occurred while adding job: ' + err.status);
            });
        };
    }]);