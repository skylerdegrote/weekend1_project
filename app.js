$(document).ready(function(){
	console.log("The Page is Ready!");


$("body").on("click", "#removeButton", function(){
	$(this).closest(".employee").remove();
});//this button is working now!






var employeeArray=[];

	$("#employeeInfoForm").submit(function(event){
		event.preventDefault(); //prevents the default event of the page refreshing

		var $inputs = $("#employeeInfoForm :input");
		var employeeList={};
		$inputs.each(function(){
			employeeList[this.name] = $(this).val();//the values[this.name] is instead of values.firstName. can use spaces (but shouldn't) in bracket notation
		});
		var firstName= "First Name: "+employeeList.firstName;
		var lastName="Last Name: "+employeeList.lastName;
		var employeeNumber="Employee Number: "+employeeList.employeeNumber;
		var employeeTitle="Employee Title: "+employeeList.employeeTitle;
		var lastReviewScore="Review Score: "+employeeList.lastReviewScore;
		var salary="Salary: "+employeeList.salary;
		var listOfEmployees = addToList(employeeList.firstName, employeeList.lastName, employeeList.employeeNumber, employeeList.employeeTitle, employeeList.lastReviewScore, employeeList.salary);




	function addToList(first, last, num, title, review, salary){
		var reviewNum= "review"+employeeList.lastReviewScore;
		$("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
			"</p><p>"+salary+" </p><br><button id='removeButton'>x</button></div>");
	}






	function list (){
		employeeArray.push(".employee");
	}

	});//end the employeeInfoForm function
	
	


	
//start randomizer
	function randomperson (min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
    }
    function person(first, last, num, employeeTitle, review, salary){
		     this.first = first;
		     this.last = last;
		     this.num = num;
		     this.employeeTitle=employeeTitle;
		     this.review=review;
		     this.salary=salary;
	}; 

	/*$("#newPersonButton").on("click",function(){
		var newPersonTitle = ["Graphic Designer", "Senior Graphic Designer", "Junior Developer", "Project Manager", "Secretary", "Senior Developer", "Web Designer", "Software Engineer", "Garbage Person", "Director"];
		var titleChoice = newPersonTitle[randomperson(0,9)];
		var newPersonReviewScore = randomperson(1,5);
		var newPersonSalary = randomperson(100, 200000);
		var newPersonEmployeeNumber = randomperson(1111, 9999)
		var firstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric", "Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
		var lastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
		var firstNameChoice = firstName[randomperson(0,19)];;
		var lastNameChoice = lastName[randomperson(0,9)];


		
		
		$(".newPersonFirstName").append("<p>  " + firstNameChoice + " </p>");
		$(".newPersonLastName").append("<p>  " + lastNameChoice + " </p>");
		$(".newPersonEmployeeNumber").append("<p>  " + newPersonEmployeeNumber + " </p>");
		$(".newPersonTitle").append("<p>  " + titleChoice + " </p>");
		$(".newPersonReviewScore").append("<p>  " + newPersonReviewScore + " </p>");
		$(".newPersonSalary").append("<p>  " + newPersonSalary + " </p>");

	

	});*/




$("#newPersonButton").on("click", function(event){
		event.preventDefault(); //prevents the default event of the page refreshing

		var employeeList={};
		var newPersonTitle = ["Graphic Designer", "Senior Graphic Designer", "Junior Developer", "Project Manager", "Secretary", "Senior Developer", "Web Designer", "Software Engineer", "Garbage Person", "Director"];
		var titleChoice = newPersonTitle[randomperson(0,9)];
		var newPersonReviewScore = randomperson(1,5);
		var newPersonSalary = randomperson(100, 200000);
		var newPersonEmployeeNumber = randomperson(1111, 9999)
		var firstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric", "Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
		var lastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
		var firstNameChoice = firstName[randomperson(0,19)];;
		var lastNameChoice = lastName[randomperson(0,9)];

		var listOfEmployees = randomAddToList(firstNameChoice,lastNameChoice, newPersonEmployeeNumber ,titleChoice, newPersonReviewScore, newPersonSalary);




	function randomAddToList(first, last, num, title, review, salary){
		var reviewNum= "review"+newPersonReviewScore;
		$("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
			"</p><p>"+salary+" </p><br><button id='removeButton'>x</button></div>");
	}






	function list (){
		employeeArray.push(".employee");
	}

	});






});//end document ready function



































