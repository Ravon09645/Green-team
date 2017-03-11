(function () {

    'use strict';

    angular.module('greenbaseball', ['ui.router', 'ui.bootstrap'])

        .factory('gtbbservice', ['$http', '$state', gtbbservice]);

    function gtbbservice($http, $scope) {
        
        var rulesApiBaseUrl = 'api/controllerroute/';
        var usertemplate={  "username": null,
            "sessionid": null,
            "role": user,
            "userdata":
            [ {
                "teams": []
            }
            ]
        }; 
        return {

            userlogin:userlogin,
            getusertemplate:getusertemplate
        };

        function ErrorResponse(stateName, NoContentFoundCallback) {
            return function (response) {
                console.log('401 error response code : ' + response.status);
                if (response.status === 401) {
                    //var toState = $state.get(stateName);
                    //toState.hasTransitionStateParams = !!toState.saveTransitionStateParams;
                    //$localStorage.transitionToState = toState;
                    //adalAuthenticationService.login();
                } else if (response.status === 404) { // no content found
                    // NoContentFoundCallback();
                } else {
                    console.log(response);
                }
            }
        }
        function getusertemplate() {
            
            return usertemplate;
        }
        //function loadruleset() {
        //    //ruleset.date = $.datepicker.formatdate("yy-mm-dd",
        //    //    $.datepicker.parsedate(ruleset.dateformat, ruleset.rawdate));
        //    //ruleset.enddate = $.datepicker.formatdate("yy-mm-dd",
        //    //    $.datepicker.parsedate(ruleset.dateformat, ruleset.rawenddate));   
        //    //ruleset.time = ruleset.pickedtime.gethours() + ':' + ruleset.pickedtime.getminutes() + ':00';
        //    //ruleset.form = formtype;
        //    //ruleset.iplist = [];
        //    //ruleset.urllist = [];
        //    //ruleset.assetlist = [];
        //    //ruleset.pentestips.foreach(addip);
        //    //ruleset.pentesturls.foreach(addurl);
        //    //ruleset.pentestassets.foreach(addasset);
        //    return $http({
        //        url: rulesapibaseurl + 'rules',
        //        method: 'get',
        //        //data: ruleset
        //    }

        //        )

        //.then(

        //function (response) {

        //    tempRuleSet = response.data;

        //},

        //new ErrorResponse('app.exceptionrequest'));


        function userlogin(password) {
            usertemplate.sessionid = password + ' worked!';
            return password + ' worked!';
            //        return $http({

            //            url: rulesApiBaseUrl + 'create',

            //            method: 'PUT',

            //            //headers:

            //            //{

            //            //    "X-XSRF-Token": angular.element('input[name="__RequestVerificationToken"]').attr('value')

            //            //},

            //            data: ruleSet

            //        }

            //            )

            //            .then(

            //                function (response) {

            //                    return response.data;

            //                },

            //                new ErrorResponse('app.exceptionrequest'));

               }

        }
    
        })();

    