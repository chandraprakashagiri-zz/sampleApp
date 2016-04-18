demoApp.controller("editController",['$scope','$rootScope', function($scope, $rootScope, $http){
    $rootScope.relatives =[
        {name:"Raghav",num:9000202200, city:"Nizamabad"},
        {name:"Shashank",num:9000202201, city:"Nizamabad"},
        {name:"Pavan",num:9000202202, city:"Nizamabad"},
        {name:"Meher",num:9000202203, city:"Nizamabad"}
    ]
}]);
demoApp.controller("getajaxController", ['$scope', '$http','getdata', function($scope, $http, getdata){
        $scope.loadRemoteData = function (){
             getdata.userdetails().then(
                 function(friends){
                     $scope.user_data = friends;
                 });
         };
         $scope.loadRemoteData();
}]);
demoApp.controller("postAjaxController",['$scope', '$http','getdata',function($scope, $http, getdata){
    $scope.testVar = "chandra";
        $scope.subform = function(postAjax, newUser){
            if($scope.newUser){//console.log($scope.newUser);
                var Ele = angular.element(document.getElementById('msg'));
                Ele.empty();
                if(postAjax.$valid){
                    getdata.postSusData($scope.newUser).then(
                        function(newUser){
                            Ele.append('<div class="well"><p> your Data <br> { <p class="text-info">'
                            + 'First Name: ' + $scope.newUser.fname + '<br>'
                            + 'Last Name: ' + $scope.newUser.lname + '<br>'
                            + 'Education: ' + $scope.newUser.edu + '<br>'
                            + 'Occupation: ' + $scope.newUser.ocup + '<br>'
                            + 'Email: ' + $scope.newUser.email + '<br>'
                            + 'Mobile: ' + $scope.newUser.mob + '<br>'
                            + 'Address: ' + $scope.newUser.addr +
                            '</p> } <br> Saved successfully</p></div>');
                            $scope.postAjax.$setUntouched();
                        }
                    )
                }else{
                    Ele.append('<div class="well"><p class="text-danger"> Please fill all the Details </p></div>');

                }
            }
        }
}]);