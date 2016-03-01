'use strict';

var app = angular.module('mySite', ['ngRoute', 'ui.router']);
console.log("app:", app)
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/splash.html',
      controller: 'homeCtrl'
    })
    .state('aboutMe', {
      url: '/aboutMe',
      templateUrl: 'partials/about.html',
      controller: 'aboutCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'partials/blog.html',
      controller: 'blogCtrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'partials/portfolio.html',
      controller: 'portfolioCtrl'
    })


  $urlRouterProvider.otherwise('/');
});

'use strict';

var app = angular.module('mySite');

app.controller('aboutCtrl', function() {
  
  $("#backgroundOverlay").addClass('overlay')
});

'use strict';

var app = angular.module('mySite');

app.controller('blogCtrl', function() {
  
  $("#backgroundOverlay").addClass('overlay')
});

'use strict';

var app = angular.module('mySite');

app.controller('homeCtrl', function() {

  $(".overlay").removeClass()
});

'use strict';

var app = angular.module('mySite');

app.controller('portfolioCtrl', function($scope) {

    $("#backgroundOverlay").addClass('overlay')


});
