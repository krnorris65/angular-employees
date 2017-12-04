let app = angular.module("EmployeeMgmt", []);

app.controller("EmployeeCtrl", ($scope, $http) => {

    $http
    .get("https://angular-employees-94a88.firebaseio.com/employees.json")
    .then( employees => {

        //created an array of the employees since firebase returns an object of objects
        $scope.employeeDB = []

        for(let key in employees.data){
            const current = employees.data[key]
            $scope.employeeDB.push(current)
        }
    })

    $scope.fireNow = (person) => {
        const indexOfPerson = $scope.employeeDB.indexOf(person) //find the index of the person clicked
        const employeeFired = $scope.employeeDB[indexOfPerson]
        employeeFired.employmentEnd = Date.now() //set employmentEnd for that person as Date.now()
        
        $http
        .put(`https://angular-employees-94a88.firebaseio.com/employees/${indexOfPerson}.json`, employeeFired) //update firebase with employee data
    }
    
    $scope.newEmployee = () => {
        const first = $scope.newFirst //value of First Name input
        const last = $scope.newLast //value of Last Name input
        const newPerson = { //creates an object with the information entered
            "firstName": first,
            "lastName": last,
            "employmentStart": Date.now(), //sets start date as Date.now()
            "employmentEnd": 0 //sets end date as null
        }
        
        //add new employee to employees array
        $http
        .post(`https://angular-employees-94a88.firebaseio.com/employees.json`, newPerson) //update firebase with new employee data

        //reset values of input fields
        $scope.newFirst = "" 
        $scope.newLast = ""
    }

})