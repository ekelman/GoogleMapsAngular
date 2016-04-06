//var gmapapp = angular.module("myApp", ['uiGmapgoogle-maps'])

angular.module("GoogleMaps").config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCjDbHNPi1x0UvZZc_FiZMra9Q8wQWjsZ4',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})

angular.module("GoogleMaps").controller('mapController', function ($scope, uiGmapGoogleMapApi) {

    // Define variables for our Map object
    var areaLat = 44.2126995,
        areaLng = -100.2471641,
        areaZoom = 3;

    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
        $scope.options = { scrollwheel: false };
    });

});
