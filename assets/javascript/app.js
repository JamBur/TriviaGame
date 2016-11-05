$(document).ready(function() {

	// Create Vars (note that I've inlcuded canceled
	// text this week to try and help show thing I'm
	// doing wrong)

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
	var correct;
	var wrong;

	// finalCountDown.parentNode.replaceChild(finalCountDown, displayClock);

	// Attempt to create a way to show anser var on screen
	$("#correctAnswers").text(correctAnswers);
	$("#incorrectAnswers").text(incorrectAnswers);
	$("#unansweredQuestions").text(unansweredQuestions);

	// 	canceled out: set function to add clock in html
		// function write (){
			// $("#clock").html(clock);
			// $("#countDown").html(countDown);
		// }

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

		}, 1000);
	});


	// caneled out: these were the last of the functions I tried
	// for scoring after many google searches and reviewing previous
	// assignments and such, but it's a hot mess



	// function checkCorrect(){
	// 	if (($radios.is('q.1.3:checked')){
	// 		correctAnswers++;
	// 	}
	// }

	// function write (){

	// 	$("#correctAnswers").html(correctAnswers);
	// 	$("#incorrectAnswers").html(incorrectAnswers);
	// }	

	// $("#q.1.3").on("checked", function() {
	// 	addTotal(correctAnswers);
	// });

	// $(function() {
 //    	var $radios = $('input:radio[name="q1.name"]');
 //    	if($radios.is('q.1.3:checked') === true) {
 //        $radios.filter('[value=correct]').prop('checked', correctAnswers++);
 //    	}
 //    	else if($radios.is('q.1.1:checked') === true) {
 //        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
 //    	}
 //    	else if($radios.is('q.1.2:checked')  === true) {
 //        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
 //    	}
 //    	else if($radios.is('q.1.4:checked')  === true) {
 //        $radios.filter('[value=wrong]').prop('checked', incorrectAnswers++);
 //    	}
	// });


	// Early on, these were helping me get stuff
	// to appear and go away, and I still think this
	// is what's making the all done screen appear 
	// when the clock runs out

	// $("#questions").hide();
	$("#allDone").hide();

	$("#doneButton").click(function(){
		$("#questions").hide();
		$("#clock").hide();
		$("#allDone").show();
	});

});