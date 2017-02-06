

(function () {

    'use strict';

    angular.module('greenbaseball', ['ui.router', 'ui.bootstrap'])

       .constant('constants', {

           apiBaseUrl: 'api/',

       })

       .config(Config)

       .run(Run);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {

        $stateProvider

              .state('index',

              {

                  templateUrl: "../app/home/home.html",

                  controller: 'homeController',

                  controllerAs: 'vm',

                  url: "/",

                  cssClass: 'securityhome'

              })

              .state('index.login',

              {

                  templateUrl: "../app/home/login.html",

                  controller: 'loginController',

                  controllerAs: 'vm',

                  url: "/login",

                  cssClass: 'securityhome'

              })

              .state('index.homepage',

              {

                  url: "/homepage",

                  templateUrl: "../app/home/homepage.html",

                  controller: 'loginController',

                  controllerAs: 'vm',

                  cssClass: 'securityhome'

              })

    }

    Run.$inject = ['$rootScope', '$state'];

    function Run($rootScope, $state) {

        $rootScope.$state = $state;

    }

})();


