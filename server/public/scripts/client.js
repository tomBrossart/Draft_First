var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

/// Routes 'ui.bootstrap'///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/start', {
      templateUrl: '/views/templates/start.html',
      controller: 'startController as sc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/idea', {
      templateUrl: '/views/templates/idea.html',
      controller: 'ideaController as ic',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/organizer', {
      templateUrl: '/views/templates/organizer.html',
      controller: 'orgController as oc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/writing', {
      templateUrl: '/views/templates/writing.html',
      controller: 'writeController as wc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/strategy', {
      templateUrl: '/views/templates/strategy.html',
      controller: 'strategyController as sc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/strategy2', {
      templateUrl: '/views/templates/strategy-5senses.html',
      controller: 'strategy2Controller as sc',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'aboutController as ac',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/intro', {
      templateUrl: '/views/templates/intro.html',
      controller: 'introController as ic',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/edit', {
      templateUrl: '/views/templates/edit.html',
      controller: 'editController as ec',
      resolve: {
        getuser: function(UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
