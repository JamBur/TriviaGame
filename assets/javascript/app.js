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

	// finalCountDown.parentNode.replaceChild(finalCountDown, displayClock);

	$("#correctAnswers").text(correctAnswers);
	$("#incorrectAnswers").text(incorrectAnswers);
	$("#unansweredQuestions").text(unansweredQuestions);

	// 	set function to add clock in html
		// function write (){
			// $("#clock").html(clock);
			// $("#countDown").html(countDown);
		// }

	$("#startButton").on("click", function() {

		setClock = setInterval(function() {
		    clock--;
		    console.log(clock);
		    $("#clock").html(clock);
		    if(clock === 0){
				setTimeout(function(){
					$("#questions").hide();
					$("#allDone").show();
				}, 1000);
			}
		    if(clock > 0) {
		    	$("#questions").show();
		    	// displayClock.parentNode.replaceChild(finalCountDown, displayClock);
		        // clearInterval(setClock);
		    }
		    // else {
		        // clock.innerHTML = clock.toString();
		    // }
		}, 1000);
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




	$("#questions").hide();
	$("#allDone").hide();

	$("#startButton").click(function(){
		$("#startButton").hide();
		$("#doneButton").show();
	});

	$("#doneButton").click(function(){
		$("#questions").hide();
		// Display results?
	});

});