(function() {
    'use strict';


    angular
        .module('memory')
        .config(Routing);

    function Routing($stateProvider) {
        $stateProvider
            .state('first', {
                url: '/first',
                templateUrl: 'templates/first.html',
                controller: 'FirstController as vm'
            });
    }

})();