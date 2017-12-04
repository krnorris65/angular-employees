let app = angular.module("EmployeeMgmt", []);

app.controller("EmployeeCtrl", ($scope) => {
    $scope.employees = [
        {
            "firstName": "Erin",
            "lastName": "Orstrom",
            "employmentStart": 1512140013765,
            "employmentEnd": null
        },
        {
            "firstName": "Wayne",
            "lastName": "Hutchinson",
            "employmentStart": 1512139999102,
            "employmentEnd": null
        },
        {
            "firstName": "Sarah",
            "lastName": "Story",
            "employmentStart": 1512139999729,
            "employmentEnd": null
        },
        {
            "firstName": "Sulaiman",
            "lastName": "Allan",
            "employmentStart": 1512140294571,
            "employmentEnd": null
        },
        {
            "firstName": "Ben",
            "lastName": "Marks",
            "employmentStart": 1512200192934,
            "employmentEnd": null
        }
    ];

    $scope.fireNow = (person) => {
        const indexOfPerson = $scope.employees.indexOf(person) //find the index of the person clicked
        const employeeFired = $scope.employees[indexOfPerson] //person who was clicked
        employeeFired.employmentEnd = Date.now() //set employmentEnd for that person as Date.now()

        console.log($scope.employees)
    }
    
    $scope.newEmployee = () => {
        const first = $scope.newFirst //value of First Name input
        const last = $scope.newLast //value of Last Name input
        const newPerson = { //creates an object with the information entered
            "firstName": first,
            "lastName": last,
            "employmentStart": Date.now(), //sets start date as Date.now()
            "employmentEnd": null //sets end date as null
        }
        
        //add new employee to employees array
        $scope.employees.push(newPerson)

        //reset values of input fields
        $scope.newFirst = "" 
        $scope.newLast = ""

        console.log($scope.employees)
    }

})