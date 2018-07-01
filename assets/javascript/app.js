
///////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////
var $start;
var timer;
var index = 0;
var time = 30;
var $start;//start div
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var unansweredCount = 0;
var answer;
var button;



///////////////////////////////////////////////GAME OBJECT////////////////////////////////////////////////

var questionAnswers = [   
        {
            question: 'Which country is the host of the 2018 FIFA world cup?',
            choices: {
                answerOne: "Brazil",
                answerTwo: "Russia",
                answerThree: "Qatar",
                answerFour: "South Africa"
            },
            image: "../TriviaGame/assets/images/Russia_2018.jpg",
            answer: "answerTwo"
        },
        {
            question: 'How many people tuned in to watch the 2014 FIFA world cup?',
            choices: {
                answerOne: "1 Billion",
                answerTwo: "800 Million",
                answerThree: "3.2 Billion",
                answerFour: "2 Billion"
            },
            image: "../TriviaGame/assets/images/crowd.gif",
            answer: "answerThree"        
        },
        {
            question: 'Which country has won the most world cup titles?',
            choices: {
                answerOne: "Germany",
                answerTwo: "Brazil",
                answerThree: "Argentina",
                answerFour: "Uruguay"
            },
            image: "../TriviaGame/assets/images/Brazil_wins.gif",
            answer: "answerTwo"        
        },
        {
            question: 'Which player has scored the most world cup goals?',
            choices: {
                answerOne: "Diego Maradona",
                answerTwo: "Pele",
                answerThree: "Miroslav Klose",
                answerFour: "Ronaldo"
            },
            image: "../TriviaGame/assets/images/Miroslav.gif",
            answer: "answerThree"        
        },
        {
            question: 'Which country will host the 2022 FIFA world cup?',
            choices: {
                answerOne: "USA/Canada/Mexico",
                answerTwo: "Japan",
                answerThree: "Qatar",
                answerFour: "Australia"
            },
            image: "../TriviaGame/assets/images/qatar.jpg",
            answer: "answerThree"        
        },
        {
            question: 'Which team won the 2014 FIFA world cup title?',
            choices: {
                answerOne: "Brazil",
                answerTwo: "Argentina",
                answerThree: "Germany",
                answerFour: "Spain"
            },
            image: "../TriviaGame/assets/images/germany_champs.gif",
            answer: "answerThree"        
        },
        {
            question: 'Which two countries have reached the final of the football World Cup the most number of times?',
            choices: {
                answerOne: "Brazil, Italy",
                answerTwo: "Germany, Brazil",
                answerThree: "Italy, Germany",
                answerFour: "Spain, Brazil"
            },
            image: "../TriviaGame/assets/images/Germany_2014.gif",
            answer: "answerTwo"        
        },
        {
            question: 'In what year was the first World Cup held, and in which country?',
            choices: {
                answerOne: "Uruguay, 1928",
                answerTwo: "Italy, 1930",
                answerThree: "Uruguay, 1930",
                answerFour: "Brazil, 1934"
            },
            image: "../TriviaGame/assets/images/Uruguay.gif",
            answer: "answerThree"        
        }
    ]

///////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////////

function startGame(){
    $(".startGame").addClass('hide');
    $(".resultFinal").addClass('hide');
    if(index < questionAnswers.length){
        triviaQuestions();
    }
    else{
        $(".correctResult").text('Correct Answers: '+correctAnswerCount);
        $(".wrongResult").text('Wrong Answers: '+wrongAnswerCount);
        $(".notansweredResult").text('Unanswered : '+unansweredCount);
        correctAnswerCount = 0;
        wrongAnswerCount = 0;
        unansweredCount = 0;
        index = 0;
        time = 30;
        $('.resultPage').addClass('hide');
        $(".startGame").css('top','450px').removeClass('hide')
        $(".resultFinal").removeClass('hide');
    }    
}

function questionResults(theResult){
    $(".questionPage").addClass('hide');
    $(".timerDiv").addClass('hide');
    answer = questionAnswers[index].answer;
    if(theResult == 1){
        $(".playerResult").text("CORRECT!!");
        $(".actualResult").text("Answer is: "+questionAnswers[index].choices[answer]);
        $('img').attr('src',questionAnswers[index].image);
        $(".resultPage").removeClass('hide');
        index++;
        setTimeout(startGame,4000);
    }else if (theResult == 0){
        $(".playerResult").text("WRONG!!");
        $(".actualResult").text("Answer is: "+questionAnswers[index].choices[answer]);
        $('img').attr('src',questionAnswers[index].image);
        $(".resultPage").removeClass('hide');
        index++;
        setTimeout(startGame,4000);
    }else if (theResult == -1){
        $(".playerResult").text("TIMES UP!!");
        $(".actualResult").text("Answer is: "+questionAnswers[index].choices[answer]);
        $('img').attr('src',questionAnswers[index].image);
        $(".resultPage").removeClass('hide');
        index++;
        setTimeout(startGame,4000);
    }
}


function incrementtime(){
    $('#timer').text(time);
    $(".questionDiv").text(questionAnswers[index].question).removeClass('hide');
    $(".answerOne").text(questionAnswers[index].choices.answerOne).removeClass('hide');
    $(".answerTwo").text(questionAnswers[index].choices.answerTwo).removeClass('hide');
    $(".answerThree").text(questionAnswers[index].choices.answerThree).removeClass('hide');
    $(".answerFour").text(questionAnswers[index].choices.answerFour).removeClass('hide');
    $(".timerDiv").removeClass('hide');
    time--;
    if (time == -1){
        clearInterval(timer);
        unansweredCount++;
        time = 30;
        questionResults(-1);

    }
}
function triviaQuestions(){
    $(".resultPage").addClass('hide');
    timer = setInterval(incrementtime,1000);
}

$(document).on('click','.answer',function(){
    clearInterval(timer);
    button = $(this);
    if(button.attr('data-value') == questionAnswers[index].answer){
        correctAnswerCount++;
        time = 30;
        questionResults(1);
    }
    else if (button.attr('data-value') != questionAnswers[index].answer){
        wrongAnswerCount++;
        time = 30;
        questionResults(0);
    }
})

$(".startGame").on('click',startGame);





