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
})