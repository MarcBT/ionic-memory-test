(function(){
    angular.module('memory')
        .controller('SecondController', SecondController);

    function SecondController() {
        var vm = this;
        vm.items = [];
        for (var i = 0; i < 1000; i++) vm.items.push(i);
    }
})();
