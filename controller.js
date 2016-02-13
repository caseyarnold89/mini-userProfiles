angular.module("userProfiles").controller("mainController", function($scope, mainService) {
    
    $scope.getUsers = function () {
        $scope.users = mainService.getUsers();
        return $scope.users;
    }
    
    $scope.users = $scope.getUsers();
    
});