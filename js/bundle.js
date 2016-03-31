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
app.run(function($window, $rootScope, $location) {
  $window.ga('create', 'UA-75162145-1', 'auto');
  $rootScope.$on('$stateChangeSuccess', function (event) {
    $window.ga('send', 'pageview', $location.path());
});
});





/*
 * Complete the function below.
 */
function decentNumber(arr) {
console.log(arr)
var decentArr = [];

    var makeIt = function(n){
        var newArr = [];
        var ele = 0;
        for(var i = 0; i < n; i++){
            if(i === 0){
                for(var x = i; x < n; x++){
                newArr.push(5);
                }
            }
            console.log(newArr)
            if(n % 3 === 0){
                return decentArr.push(newArr.join(""));
            }else{
                for(b = 0; b < 5; b++){
                    console.log("__________")
                    newArr[n - 1 - ele] = 3;
                    ele++
                }
                if((ele)%5 === 0){
                    console.log("...........")
                    return decentArr.push(newArr.join(""))
                    }
            }
        }
    }



    for(i=0; i<arr.length; i++){
        if(arr[i] < 3){
            decentArr.push(-1)
        }else{
            console.log(i)
            console.log("decArr",decentArr)
            var decNum = makeIt(arr[i]);
            console.log("decArr2", decentArr)
        }
    }


    console.log(decentArr)

}

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
