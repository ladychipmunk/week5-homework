var app = angular.module('app',['ui.router'])
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: 'js/states/home/home.html',
    controller:"home"
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'js/states/about/about.html',
    controller: "about"
  }


  var link3State = {
    name:"link3",
    url: "/link3",
    templateUrl: "js/states/link3/link3.html",
    controller:"link3"
          
    }

    var blogState = {
    name: 'blog',
    url: '/blog',
    templateUrl: 'js/states/blog/blog.html',
    controller: "blog"
 }

  

  

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(link3State);
  $stateProvider.state(blogState);

});