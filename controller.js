angular.module("userProfiles").controller("mainController", function($scope, mainService) {
    
    $scope.currentPage = 1;
    
    $scope.getUsers = function () {
        var promise = mainService.getUsers($scope.currentPage);
        promise.then(function(response) {
            $scope.users = response;
        })
    }
    
    $scope.getUsers();
    
    $scope.next = function(){
        $scope.currentPage++;
        $scope.getUsers();
    }
    
    $scope.previous = function(){
        $scope.currentPage--;
        $scope.getUsers();
    }
})