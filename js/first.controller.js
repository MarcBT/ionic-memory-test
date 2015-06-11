(function(){
    angular.module('memory')
        .controller('FirstController', FirstController);

    function FirstController() {
        var vm = this;
        vm.items = [];
        for (var i = 0; i < 1000; i++) vm.items.push(i);
    }
})();
