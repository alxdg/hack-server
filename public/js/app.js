
var app = angular.module('myApp', []);
app.controller('queueCtrl', function ($scope, $http) {
    $http.get("http://localhost:3000/queue")
            .then(function (response) {
                $scope.queue = response.data;
            });
});
