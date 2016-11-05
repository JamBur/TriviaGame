$(document).ready(function() {

	// Create Vars
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unansweredQuestions = 0;
	var clock = 30;
	// var finalCountDown = $("#countDown");
	// var displayClock = $("<div id='clock'>");
	// displayClock.innerHTML = "5";
	var setClock;
	var button = "startButton"
	var countDown;

	// finalCountDown.parentNode.replaceChild(finalCountDown, displayClock);

	$("#correctAnswers").text(correctAnswers);
	$("#incorrectAnswers").text(incorrectAnswers);
	$("#unansweredQuestions").text(unansweredQuestions);

	// 	set function to add clock in html
		// function write (){
			// $("#clock").html(clock);
			// $("#countDown").html(countDown);
		// }

	// $("#startButton").on("click", function() {

	$("#startButton").click(function(){
		$("#startButton").hide();
		$("#clock").show();
		$("#countDown").show();

		setClock = setInterval(function() {
		    clock--;
		    console.log(clock);
		    $("#clock").html(clock);
		    if(clock > 0) {
		    	$("#questions").show();
		    	$("clock").show();
		    	// $("#countDown").html(clock);
		    	// displayClock.parentNode.replaceChild(finalCountDown, displayClock);
		        // clearInterval(setClock);
		    }
		    else if(clock === 0){
				setTimeout(function(){
					$("#questions").hide();
					$("#allDone").show();
					$("#clock").hide();
					// console.log(correctAnswers);
			  //   	$("#correctAnswers").html(correctAnswers);
			  //   	console.log(incorrectAnswers);
			  //   	$("#incorrectAnswers").html(incorrectAnswers);
			  //   	console.log(unansweredQuestions);
			  //   	$("#unansweredQuestions").html(unansweredQuestions);
		    }, 1000);

			}
		    // else {
		        // clock.innerHTML = clock.toString();
		    // }
		}, 1000);
	// });
	});

	$(function() {
    	var $radios = $('input:radio[name="q1.name"]');
    	if($radios.is('q.1.3:checked') === true) {
        $radios.filter('[value=correct]').prop('checked', correctAnswers++);
    	}
    	else if($radios.is('q.1.1:checked') === true) {
        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
    	}
    	else if($radios.is('q.1.2:checked')  === true) {
        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
    	}
    	else if($radios.is('q.1.4:checked')  === true) {
        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
    	}
	});




	// $("#questions").hide();
	$("#allDone").hide();

	$("#doneButton").click(function(){
		$("#questions").hide();
		$("#clock").hide();
		$("#allDone").show();
		// Display results?
	});

});