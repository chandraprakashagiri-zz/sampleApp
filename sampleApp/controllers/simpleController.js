demoApp.controller('simpleController', simpleController);
function simpleController($scope, $rootScope){
    //window.alert('alert from controller link');
    //console.log('Main Controller')
    //$scope.colors = "blue",
    $scope.topics = [ 'basics','form validation','custom directives','$Scope','factory & services','$httpGet','$httpPost','animations'],

    $scope.cust_details = [ 'customer name','phone number','Address'],
    $rootScope.customers=[
        {name:"Chandra",num:9000202200, city:"Hyderabad"},
        {name:"Alok",num:9000202201, city:"Warangal"},
        {name:"Raghu",num:9000202202, city:"Nizamabad"},
        {name:"Gopi2",num:9000202203, city:"Warangal"}
    ];
    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city

        });
    };
    $rootScope.test_scope = function(){
        if($scope.relatives) window.alert($scope.relatives[0].name);
        else window.alert("click on $scope Tab and then click again");
    };
    $scope.appendCustomer = function(){
        var myEl = angular.element( document.getElementById('cust_table').children[0] );
        myEl.append( '<tr><td>' +
        $scope.newCust.name + '</td><td>' +
        $scope.newCust.num + '</td><td>' +
        $scope.newCust.city + '</td></tr>');
    },
    $scope.save = function(form, user) {
        $scope.checkValidate(form);
    }
    $scope.checkValidate = function(form){
        console.log(form);
        console.log('$valid:'+ form.$valid);
        console.log('$invalid:'+ form.$invalid);
        console.log('$dirty(interacted):'+ form.$dirty);
        console.log('$pristine(not interacted):'+ form.$pristine);
        console.log('$touched(blurred):')+ form.$touched;
        console.log('$untouched(not interacted):'+ form.$untouched);
        console.log('$pending(unfulfilled):')+ form.$pending;
        $scope.form.$setUntouched();
    }

};
