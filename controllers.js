 var app = angular.module('starter.controllers', ["xeditable"]);


app.controller('myCtrl', function($scope, Post,$http,$ionicPopup, $timeout,$q) {
    
   $scope.newdata;

      Post.query(function(data) {
    
      $scope.posts = data;
      
      });
    
 $scope.myFunc = function() {
  
        $scope.data1=$scope.name   

        Post.save({title:$scope.name});
    
        $scope.name=''; 
     
        Post.query(function(data) {
              $scope.posts=[];
              $scope.posts = data;
            
  });
   
  };
    
 $scope.removeItem = function (id) {
     
      var url= "http://localhost:3000/api/todoapps/"+id ;
     
                         // $http.delete("http://localhost:3000/api/todoapps/",{id:id});
  
            $http.delete(url);
     
            Post.query(function(data) {
    
            $scope.posts = data;
      
      });
    
 };
$scope.updateUsers = function(data) {
        
        $scope.newdata=data;
     
 };

$scope.updateUser = function(data) {
        
        return $http.put("http://localhost:3000/api/todoapps/", {id:$scope.newdata,title:data});
         
    }; 
    
});