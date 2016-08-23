var app = angular.module('starter.services', []);

app.factory('Post', function($resource) {
  return $resource('http://localhost:3000/api/todoapps:id');
});
