(function() {
    'use strict';


    angular
        .module('memory')
        .controller('AppController', AppController);

    function AppController($rootScope) {

        // App configuration
        $rootScope.app = {
            title: 'memory-test'
        };
    }

})();
