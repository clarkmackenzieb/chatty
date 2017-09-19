'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    
    
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function (message, user) {
      if (message) {
        console.log("main.js message: ", message)
        console.log("main.js user: ", user)
        messageService.addMessage(message, user).then(function ( response ) {
          console.log("main.js response: ", response.data)
          $scope.messages = response.data.messages;
        });
      }
    };



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
