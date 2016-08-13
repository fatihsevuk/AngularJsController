var app=angular.module('myApp' , []);

app.controller('myCtrl' , function ($scope) {

    $scope.names=[

        {ad:'ali' ,yas:23},
        {ad:'ahmet',yas:45},
        {ad:'ayşe' ,yas:65},
        {ad:'kadir',yas:32}



    ];



});