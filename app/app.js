angular.module('app', [ 'ui.router' ]).config( function( $stateProvider, $urlRouterProvider ) {
    $stateProvider
      .state({
        name: 'allQ',
        url: '/',
        component: 'allQ'
      })
      .state({
        name: 'easy',
        url: '/easy',
        component: ''
      })
      .state({
        name: 'medium',
        url: '/medium',
        component: ''
      })
      .state({
        name: 'hard',
        url: '/hard',
        component: ''
      })
  
    $urlRouterProvider
      .otherwise('/');
  });