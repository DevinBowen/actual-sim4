// 48C
angular.module('app').component('allQ', {
    templateUrl: '/api/trivia/questions/',
    controllerAs: 'allQCtrl',
    bindings: {
        item: '<',
        action: '&',
        actionLabel: '@'
      }
});