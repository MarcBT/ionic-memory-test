(function() {
    'use strict';


    angular
        .module('memory')
        .config(Routing);

    function Routing($stateProvider) {
        $stateProvider
            .state('second', {
                url: '/second',
                templateUrl: 'templates/second.html',
                controller: 'SecondController as vm'
            });
    }

})();