

(function () {
    'use strict';
    angular.module('greenbaseball')
        .controller('homeController', homeController);
    homeController.$inject = ['$rootScope', '$scope', 'gtbbservice'];
    function homeController($rootScope, $scope, gtbbservice) {
        var vm = this;
        $rootScope.title = '';
        vm.error = null;
        vm.$rootScope = $rootScope;
        vm.gtbbservice = gtbbservice;
        vm.resourceName = "home"; //this resolves to the resource name on the server
        vm.init();
    }
    homeController.prototype = Object.create({
        init: function () {
            var vm = this;
            vm.usertemplate = vm.gtbbservice.getusertemplate();
        },
        logIn: function () {
            var self = this;
            //self.stateTransitionService.transition("dashboard"); 
        }
    });
})();


