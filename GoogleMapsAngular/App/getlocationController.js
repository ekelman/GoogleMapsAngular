/// <reference path="googleMaps.js" />
//var GoogleMapsApp = angular.module('GoogleMaps', [])

angular.module("GoogleMaps").controller('GoogleMapsController', function ($scope, GoogleMapsService) {

    $scope.location = [];
    
    init();

    function init() {
        $scope.location = GoogleMapsService.getLocation();
    }
});

angular.module("GoogleMaps").factory('GoogleMapsService', function () {
    var latlon = [
        { lat: '33.0613863', lon: '-96.8066649' }
    ];

    var GoogleMapsService = {};

    GoogleMapsService.getLocation = function () {
        return latlon;
    };

    return GoogleMapsService;
});