(function() {
    'use strict';


    angular
        .module('memory')
        .config(Routing);

    function Routing($urlRouterProvider, $ionicConfigProvider) {
        $urlRouterProvider.otherwise('/first');

        // Disable view cache
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.views.transition('none');
    }

})();