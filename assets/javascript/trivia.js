$(document).ready(function(){
	
	$('.questions').hide();
	$('.info').hide();
	$('#restart').hide();
	var correct = 0;
	var wrong = 0;
	var currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	var background = new Audio("assets/audio/background.mp3");
	var what = new Audio("assets/audio/lose.mp3");
	background.play();
	background.loop = true;
	var r = 0;
	var guess;
	var questions = [

		q1 = {question: 'Which Boss character from the original Street Fighter II wears an eyepatch?',
			right: 'Sagat',
			choices: ['Bison', 'Vega', 'Sagat', 'Balrog']
			},
		q2= {question: 'Which of the following characters from Street Fighter I are from Japan?',
			right: 'Ryu',
			choices:['Ken', 'Adon', 'Sagat', 'Ryu'],
		},
		q3= {question: 'Which Street Fighter character wishes they were trained by Ryu?',
			right: 'Sakura',
			choices:['Cammy', 'Sakura', 'Ken', 'Guile'],
		},
		q4= {question: 'Which Street Fighter character was created as a parody to the Art of Fighting series?',
			right: 'Dan',
			choices:['Dan', 'Ken', 'Balrog', 'E.Honda'],
		},
		q5= {question: 'Which Street Fighter character is seeking revenge for the death of their friend Charlie?',
			right: 'Guile',
			choices:['Ken', 'Blanka', 'Ryu', 'Guile'],
		},
		q6= {question: 'Which game in the Street Fighter series was Evil Ryu introduced?',
			right: 'Street Fighter Alpha',
			choices:['Super Street Fighter II', 'Street Fighter Alpha', 'Street Fighter III', 'Street Fighter'],
		},
		q7= {question: 'What is the name of the crime syndicate ran by Bison?',
			right: 'Shadoloo',
			choices:['Bad Guys Inc.', 'Yakuza', 'Golden Lotus Society', 'Shadoloo'],
		},
		q8= {question: 'Which Street Fighter character taught Chun-Li the art of Tai Chi?',
			right: 'Gen',
			choices:['Ryu', 'Gen', 'Akuma', 'Fei Long'],
		},
		q9= {question: 'Which Street Fighter character trained Ryu and Ken?',
			right: 'Gouken',
			choices:['Akuma', 'Gen', 'Sagat', 'Gouken'],
		},
		q10= {question: 'What other Capcom game franchise did the character "Hugo" originate from?',
			right: 'Final Fight',
			choices:['Resident Evil', 'Final Fight', 'Saturday Night Slam Masters', 'Power Stone'],
		},
	]
	 var clock = {
		time: 30,
		int1:0,
		int2:0,
		reset:function() {
			clock.time = 30; 
			$('#timerem').html("Time remaining: " + clock.time);
		},
		count: function() {
			clock.time--;
			$('#timerem').html("Time remaining: " + clock.time);
		},
		start:function() {
			int1 = setInterval(clock.count, 1000);
			int2 = setTimeout(clock.out, 30000);
		},
		stop: function (){
			clearInterval(int1);
			clearTimeout(int2);
		},
		out: function() {
			clock.stop();
			$('.info').show();
			$('#info').html('Time Over!!! The correct answer is ' + currentQ.right + '!');
			$('.questions').hide();
			what.play();
			wrong++;
			setTimeout(setQuestion, 3000);
			
		}


	}


	function setQuestion () {
		$('#restart').hide();
		if(r < questions.length){
			clock.reset();
			clock.start();
			$('.info').hide();
			$('.questions').show();
			currentQ = questions[r];
			console.log(currentQ);
			$('#question').html(currentQ.question);
				for(i=0; i<currentQ.choices.length; i++){
					$('#'+ parseInt(i+1)).attr('value', currentQ.choices[i]);
					$('#'+ parseInt(i+1)).html(currentQ.choices[i]);
			}
		r++; 

		} else {
		$('.questions').hide();
		$('#info').show();
		$('#info').html('The battle has ended, you had ' + correct + ' questions correct and ' + wrong + ' questions wrong');
		$('#restart').show();
		}

	}; 
	 
	$('#start').on('click', function(){
		$('#start').hide();
		setQuestion();	
	});
	$('#restart').on('click', function(){
		$('#restart').hide();
		r=0;
		correct=0;
		wrong=0; 
		setQuestion();	

	});

	$('.btnChoice').click(function(){
		guess = $(this).attr("value");

		console.log($(this).attr("value"));

		if($(this).attr("value") == currentQ.right){
			$('.info').show();
			$('#info').html('Correct!!')
			$('.questions').hide();;
			clock.stop();
			setTimeout(setQuestion, 3000);
			var right = new Audio("assets/audio/win.mp3");
			right.play();
			correct++;
		}  else {
			$('.info').show();
			$('#info').html('Ouch!! The correct answer is ' + currentQ.right + '!');
			$('.questions').hide();
			clock.stop();
			setTimeout(setQuestion, 3000);
			what.play();
			wrong++;
		}
	}); 
	var q = questions.length; 

	console.log(questions.length)

	var timer = {

	}
	


});
