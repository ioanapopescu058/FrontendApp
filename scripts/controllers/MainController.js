hrApp.controller('MainController', ['$scope', function ($scope) {'use strict';

    $scope.title = 'HR Application';
    $scope.description = "Web application for employee management";

    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);
