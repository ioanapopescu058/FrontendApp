/**
 * Created by Ioana.Popescu on 7/24/2017.
 */
hrApp.controller('DepartmentViewController', ['$scope', '$http', '$routeParams', '$location', 'DepartmentService',
    function($scope, $http, $routeParams, $location, DepartmentService) { 'use strict';

        /**
         * Retrieve a department
         * @param departmentId - identifier of the department to be retrieved
         */
        DepartmentService.findOne($routeParams.departmentId)
            .then(function(res) {
                $scope.department = res.data;
            }, function(err) {
                console.log('An error occurred while finding the department: ' + err.status);
            });

        /**
         * Navigate back to department list page
         */
        $scope.back = function() {
            $location.url('/departmentList');
        };

    }]);