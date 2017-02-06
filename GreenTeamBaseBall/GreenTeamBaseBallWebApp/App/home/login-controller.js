

(function () {
    'use strict';
    angular.module('greenbaseball')
        .controller('loginController', loginController);
    loginController.$inject = ['$rootScope', '$scope', 'gtbbservice'];
    function loginController($rootScope, $scope, gtbbservice) {
        var vm = this;
        $rootScope.title = '';
        vm.error = null;
        vm.$rootScope = $rootScope;
        vm.gtbbservice = gtbbservice;
        vm.resourceName = "login"; //this resolves to the resource name on the server
        vm.init();
    }
    loginController.prototype = Object.create({
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


