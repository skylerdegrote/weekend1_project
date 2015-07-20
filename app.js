$(document).ready(function(){
	console.log("The Page is Ready!");
	var employeeArray=[];


	$("body").on("click", "#removeButton", function(){
		var deletedPerson = parseInt($(this).closest("#employeeChart").find(".employee").text());	
		for(var i=0; i<employeeArray.length; i++){
			if (deletedPerson == employeeArray[i].employeeNumber){
				employeeArray[i]=employeeArray[employeeArray.length-1];
			}
		}
		employeeArray.pop();
		$(this).closest(".employee").remove();
			




	});//this button is working now!






	console.log(employeeArray);
	$("#employeeInfoForm").submit(function(event){
		event.preventDefault(); //prevents the default event of the page refreshing

		var $inputs = $("#employeeInfoForm :input");
		var employeeList={};
		$inputs.each(function(){
			employeeList[this.name] = $(this).val();//the values[this.name] is instead of values.firstName. can use spaces (but shouldn't) in bracket notation
		});
		var firstName = employeeList.firstName;
		var lastName = employeeList.lastName;
		var employeeNumber = employeeList.employeeNumber;
		var employeeTitle = employeeList.employeeTitle;
		var lastReviewScore = employeeList.lastReviewScore;
		var salary = employeeList.salary;
		addToList(firstName, lastName, employeeNumber, employeeTitle, lastReviewScore, salary);




	function addToList(first, last, num, title, review, salary){
		var reviewNum= "review"+employeeList.lastReviewScore;

		$("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
			"</p><p>"+salary+" </p><button id='removeButton'>Fire this Person</button></div>");
	}

	employeeArray.push(employeeList);
	console.log(employeeList);
	console.log(employeeArray);
	
	});//end the employeeInfoForm function
	
	


	
//start randomizer
	function randomperson (min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
    }
    /*function person(first, last, num, employeeTitle, review, salary){
		    this.firstNameChoice = first;
		    this.lastNameChoice = last;
		    this.num = num;
		    this.employeeTitle = employeeTitle;
		    this.newPersonReviewScore = review;
		    this.salary = salary;
	}; 
*/

	$("#newPersonButton").on("click", function(event){
		event.preventDefault(); //prevents the default event of the page refreshing

		var employeeList={};
	function Person(){
		    this.firstName = firstName[randomperson(0,19)];;
		    this.lastName = lastName[randomperson(0,9)];;
		    this.num = randomperson(1111, 9999);
		    this.employeeTitle = newPersonTitle[randomperson(0,9)];;
		    this.newPersonReviewScore = randomperson(1,5);;
		    this.salary = randomperson(100, 200000);;
	}; 
		var newPersonTitle = ["Graphic Designer", "Senior Graphic Designer", "Junior Developer", "Project Manager", "Secretary", "Senior Developer", "Web Designer", "Software Engineer", "Garbage Person", "Director"];
		// var titleChoice = newPersonTitle[randomperson(0,9)];
		// var newPersonReviewScore = randomperson(1,5);
		// // var newPersonSalary = randomperson(100, 200000);
		// var newPersonEmployeeNumber = randomperson(1111, 9999)
		var firstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric", "Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
		var lastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
		// var firstNameChoice = firstName[randomperson(0,19)];
		// var lastNameChoice = lastName[randomperson(0,9)];
		var newRandomPerson = new Person();
		employeeArray.push(newRandomPerson);
		randomAddToList(newRandomPerson.firstName, newRandomPerson.lastName, newRandomPerson.num, newRandomPerson.employeeTitle, newRandomPerson.newPersonReviewScore, newRandomPerson.salary);
			
		
		
		



	function randomAddToList(first, last, num, title, review, salary){
		var reviewNum= "review"+review;
		$("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
			"</p><p>"+salary+" </p><button id='removeButton'>Fire this Person</button></div>");
	}

	console.log(employeeArray);
	});




});//end document ready function


































