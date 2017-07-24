hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$filter', '$location', 'DepartmentService', 'JobService', 'EmployeeService',
    function($scope, $http, $routeParams, $filter, $location, DepartmentService, JobService, EmployeeService) { "use strict";

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        DepartmentService.findAll().then(function(res) {
            $scope.departments = res.data;
        }, function(err) {
            console.log('An error occurred while finding all departments: ' + err.status);
        });

        JobService.findAll().then(function(res) {
            $scope.jobs = res.data;
        }, function(err) {
            console.log('An error occurred while finding all jobs: ' + err.status);
        });

        EmployeeService.findAll().then(function(res) {
            $scope.managers = res.data;
        }, function(err) {
            console.log('An error occurred while finding all employees: ' + err.status);
        });

        EmployeeService.findOne($routeParams.employeeId).then(function(res) {
            $scope.employee = res.data;
            $scope.employee.hireDate = $filter('date')($scope.employee.hireDate, 'yyyy-MM-dd');
        }, function(err) {
            console.log('An error occurred while finding employee: ' + err.status);
        });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        $scope.save = function (employee) {
            EmployeeService.edit(employee).then(function () {
                $location.url('/employeeView/' + $scope.employee.employeeId);
            }, function (err) {
                console.log('An error occurred while editing employee: ' + err.status);
            });
        };
    }]);