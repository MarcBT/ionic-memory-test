(function() {
    'use strict';


    angular
        .module('memory')
        .config(Routing);

    function Routing($urlRouterProvider) {
        $urlRouterProvider.when('', '/first');
    }

})();