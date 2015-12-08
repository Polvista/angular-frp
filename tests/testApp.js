var app = angular.module("app", ['angular-frp']);

app.controller("testsCtrl", ($scope, Stream) => {
    console.log(Stream);
});