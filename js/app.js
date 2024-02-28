/*1. Make sure i create the arrays for the questions
  2. buttons
  3. add event listeners
  4. else ifs for the questions
  5. TAKE YOUR TIME AND ASK FOR HELP WHEN YOU NEED IT MAYNE! IN THIS CASE I WILL BECAUSE JAVASCRIPT PUTTING ME THOUGH IT. */
  //I looked at youtube videos, past assignments and other projects to help me with this game.She Codes and Coding ninjas as well.  

//---I WANT TO KEEP THESE EVENTLISTENERS HERE TO SHOW HOW IT WASNT WORKING BEFORE I MOVED IT UNDER THE BEGIN QUIZ FUNCTION----//

    //startBtn.addEventListener("click", start)
    //nextBtn.addEventListener("click", next)
    //prevBtn.addEventListener("click", prev)
    //submitBtn.addEventListener("click", submit)
    //restartBtn.addEventListener("click", restart)
    //trueBtn.addEventListener("click", true)
    //falseBtn.addEventListener("click", False)

    //const startBtn = document.getElementById("start")
    const nextBtn = document.getElementById("next")
    const prevBtn = document.getElementById("prev")
    const submitBtn = document.getElementById("submit")
    const restartBtn = document.getElementById("restart")
    const trueBtn = document.getElementById("True")
    const falseBtn = document.getElementById("False")
    const userScore = document.getElementById("user-score")
    const totalScore = document.getElementById("total-score")
    const questionText = document.getElementById("question-text")

    

    let userInput = confirm("You have been chosen to be involed in a secret initative. But before you are accepted you must answer these questions to see where you will be placed in the upcoming conflict. Do you accept?")
    if(userInput) {
        alert("Then its time. Get ready and goodluck.")
    } else {
        alert("Ohh Im sorry...Did I say you could walk out of this? Get ready. The world...no the galaxy will need you.")
    }
    
    let currentQuestion = 0
    let score = 0

    let questions = [
        {
            question:"1. What is the title that Luffy will be called one day?",
            answers: [
                {option: "King of the Pirates!", answer: true},
                {option: "The king of food!", answer: false},
                {option: "The most wanted pirate!", answer: false},
                //{option: "King of the Seas!", answer: false},
            ]
        },
        {
            question:"2. In the series Firefly what was the name of the ship that Malcolm Reynolds captained?",
            answers: [
                {option: "USS Enterprise line", answer: false},
                {option: "Serenity", answer: true},
                //{option: "The SAM-Jackson cruiser", answer: false},
                //{optoin: "Outlaw Star", answer: false},
                //{option: "Heighliner", answer: false},
            ]
        },
        {
            question:"3. In the show Mighty Morphing Power Rangers who is the elder leader of the Rangers?",
            answers: [
                {option: "Lord Zed", answer: false},
                {option: "Zordon", answer: true},
                //{option: "Alfa 5", answer: false},
                //{option: "Samuel L Jackson in the morphin grid", answer: false},
                
            ]
        },
        {
            question:"4. Who played detective Josephus the investigator in the popular show called The Expanse?",
            answers: [
                {option: "Samuel L jackson in that one show", answer: false},
                {option: "Thomas Jane", answer: true},
                /*{option: "David Duchovny", answer: false},
                {option: "Eddie Izzard", answer: false},
                {option: "Nathan Fillion", answer: false},*/
            ]
        },
        {
            question:"5. The famous band Red Hot Chilli Peppers credits this Artist for the thier stardom?",
            answers: [
                {option: "Steven Tyler", answer: false},
                {option: "George Clinton", answer: true},
                /*{option: "Jon bon Jovi", answer: false},
                {option: "Rob Zombie", answer: false},
                {option: "Sam Jackson in Do the right thing", answer: false},
                */
            ]
        },
        {
            question:"6. What is the name of the popular indie comic dealing with alzheimers and a sword?",
            answers: [
                {option: "God Country", answer: true},
                {option: "Black hammer", answer: false},
               /* {option: "Utopia", answer: false},
                {option: "Saga", answer: false},*/
            ]
        },
        {
            question:"7. What is the name of this famous show that portrays a famous being known as a Time Lord?",
            answers: [
                {option: "Dr. Who", answer: true},
                {option: "Mork and Mindy", answer: false},
                /*{option: "Beyhives", answer: false},
                {option: "Outer Limits", answer: false},
                {option: "Pulp Fiction", answer: false},
                {option: "Hear me out....Morgan Freeman", answer: false},*/
            ]
        },
        {
            question:"8. Who is the indie comic book character thats famous for saying THINK MARK!!",
            answers: [
                {option: "Omni man", answer: true},
                {option: "J.Jonah Jameson", answer: false},
                /*{option: "J.K Simmons", answer: false},
                {option: "Nick Fury", answer: false},*/
            ]

        },
        {
            question:"9. What movie had a star studded cast of actors who were famous assassins.....",
            answers: [
                {option: "Red", answer: true},
                {option: "John Wick", answer: false},
                /*{option: "Pulp Fiction", answer: false},
                {option: "Kill Bill", answer: false},*/
            ]
        },
        {
            question:"10. Whats the famous anime narrarated by Sam Jackson?",
            answers: [
                {option: "Naruto", answer: true},
                {option: "Big-O", answer: false},
               /* {option: "Sailor moon", answer: false},
                {option: "Demon slayer", answer: false},*/
            ]
        },
        {
            question:"11. In the show Avatar the last airbender what is the nickname or Uncle Iroh?",
            answers: [
                {option: "Dragon of the west", answer: true},
                {option: "Wiseman of the dragons flame", answer: false},
            ]
        },
        {
            question: "12. Who did Nick fury message at the end of Avengers Infinity War?",
            answers: [
                {option: "John Wick", answer: false},
                {option: "Captain Marvel", answer: true},
            ]
        },
        {
            question: "13. What did Thor say when he arrived at the battlefield in Wakanda?",
            answers: [
                {option: "I AM THOR!! GOD OF THUNDER!", answer: false}, 
                {option: "BRING ME THANOS!", answer: true},
            ]
        },
        {
            question: "14. Finish this line BY THE POWER OF GREYSKULL _______________!",
            answers: [
                {option: "GIVE ME THE POWER!", answer: false},
                {option: "I HAVE THE POWER!", answer: true},
            ]
        },
        {
            question: "15. What was the ORIGINAL reason Thanos snapped the half the universe?",
            answers: [
                {option: "He could rule the Universe better", answer: false},
                {option: "He was in Love", answer: true},
            ]
        },
        {
            question: "16. In DC comics Dakota verse... who is considered just as powerful as superman?",
            answers: [
                {option: "Hardwire", answer: false},
                {option: "ICON", answer: true},
            ]
        },
        {
            question: "17. Who is considered the first ever Black Panther?",
            answers: [
                {option: "BASHENGA", answer: true},
                {option: "T'CHAKA", answer: false},
            ]
        },
        {
            question: "18. What was the phrase that Thorin Oaknsheild yelled during the battle of the five armies?",
            answers: [
                {option: "DU BARKAR", answer: true},
                {option: "AT DAWN! Look to the EAST", answer: false},
            ]
        },
        {
            question: "19. Finish this song quote. TOSS A COIN TO YOUR____________!",
            answers: [
                {option: "BUTCHER!", answer: false},
                {option: "WITCHER!", answer: true},
            ]
        },
        {
            question: "20. Who is the god who could see all in Thor?",
            answers: [
                {option: "Samuel L. Jackson in real life", answer: false},
                {option: "Heimdal", answer: true},
            ]
        }
    ]
    nextBtn.addEventListener("click", next)
    prevBtn.addEventListener("click", prev)
    submitBtn.addEventListener("click", submit)
    restartBtn.addEventListener("click", restart)

    function beginQuiz() {
        currentQuestion = 0
        totalScore.innerHTML = questions.length
        questionText.innerHTML = questions[currentQuestion].question
        trueBtn.innerHTML = questions[currentQuestion].answers[0].option
        trueBtn.onclick = () => {
            if(questions[currentQuestion].answers[0].answer) {
                if(score < 20) {
                    score++
                }
            }
            userScore.innerHTML = score
            if(currentQuestion < 20) {
                next()
            }
        }
        falseBtn.innerHTML = questions[currentQuestion].answers[1].option
        falseBtn.onclick = () => {
            if(questions[currentQuestion].answers[1].answer) {
                if(score < 20) {
                    score++
                }
            }
            userScore.innerHTML = score
            if(currentQuestion < 20) {
                next()
            }
        }
        prevBtn.classList.add("hide")
    }

    beginQuiz()

    function restart() {
        currentQuestion = 0
        prevBtn.classList.remove("hide")
        nextBtn.classList.remove("hide")
        submitBtn.classList.remove("hide")
        trueBtn.classList.remove("hide")
        falseBtn.classList.remove("hide")
        score = 0
        userScore.innerHTML = score
        beginQuiz()
    }

    function next() {
        currentQuestion++
        if(currentQuestion >= 10) {
            //nextBtn.classList.add("hide")----If i kept this in then the nextbtn would stop at num. 10.
            prevBtn.classList.remove("hide")
        }
        questionText.innerHTML = questions[currentQuestion].question
        trueBtn.innerHTML = questions[currentQuestion].answers[0].option
        trueBtn.onclick = () => {
            if(questions[currentQuestion].answers[0].answer) {
                if(score < 20) {
                    score++
                }
            }
            userScore.innerHTML = score
            if(currentQuestion < 20) {
                next()
            }
        }
        falseBtn.innerHTML = questions[currentQuestion].answers[1].option
        falseBtn.onclick = () => {
            if(questions[currentQuestion].answers[1].answer) {
                if (score < 20) {
                    score++
                }
            }
            userScore.innerHTML = score
            if(currentQuestion < 20) {
                next()
            }
        }
        prevBtn.classList.remove("hide")

    }

        function prev() {
        currentQuestion--
        if(currentQuestion <= 20) {
            nextBtn.classList.remove("hide")
            prevBtn.classList.add("hide")
        }
        questionText.innerHTML = questions[currentQuestion].question
        trueBtn.innerHTML = questions[currentQuestion].answers[0].option
        trueBtn.onclick = () => {
            if(questions[currentQuestion].answers[0].answer) {
                if(score < 20) {
                    score++
                }
            }
        userScore.innerHTML = score
        if(currentQuestion < 20) {
            next()
        }    
    }
        falseBtn.innerHTML = questions[currentQuestion].answers[1].option
        falseBtn.onclick = () => {
            if(questions[currentQuestion].answers[1].answer) {
                if(score < 20) {
                    score++
                }
            }
        userScore.innerHTML = score
        if(currentQuestion < 20) {
            next()
        }
    }
        prevBtn.classList.remove("hide")
        
    }
    function submit() {
        prevBtn.classList.add("hide")
        nextBtn.classList.add("hide")
        submitBtn.classList.add("hide")
        trueBtn.classList.add("hide")
        falseBtn.classList.add("hide")
        questionText.innerHTML ="Congratulations on finishing! Samuel L. Jac..I mean Nick Fury approves."
    }

//--THIS IS EVERYTHING I WORKED ON PRIOR----//

   //Create your arrays for your questions
//class stGame {
    ///constructor() {
        //I need to look up my slides again for the "this" feature
        //this.currentQuestion =0;
        //this.userScore = 0; 

 
    /*let questions = [
    {
        num: 1,
        question: "Who is the person resoponsible for giving Luffy his iconic hat?",
        answer: "Red Haired Shanks",
        options: ["Monkey D Garp", "Whitebeard", "Red Haired Shanks", "Portgas D. Ace", "Monkey D. Dragon"]
    },
    {
        num: 2,
        question: "In the series Firefly what was the name of the ship that Malcolm Reynolds captained?",
        answer: "Serenity",
        options: ["Heighliner", "USS Enterprise line", "Odyssey", "Serenity", "Outlaw Star"]
    },
    {
        num: 3,
        question: "In the opening scene in The Mighty Morphin Power Rangers what did Zordon tell Alfa 5 when they needed to recruit?",
        answer: "Teenagers with attitudes",
        options: ["We need power rangers", "Powerful beings of earth", "Teenagers with attitude", "High powered individuals", "Supernatual teens"]
    },
    {
        num: 4,
        question: "Who played the detective Josephus the investigator in the famous show based off the novel The Expanse?",
        answer: "Thomas Jane",
        options: ["Thomas Jane", "David Duchovny", "Eddie Izzard", "Vince Vaughn", "Nathan Fillion"]
    },
    {
        num: 5,
        question: "The famous band Red Hot Chilli Peppers credits this artist for thier stardom?",
        answer: "Geroge Clinton",
        options: ["Steven Tyler", "Jon bon Jovi", "Rob Zombie", "George Clinton", "Bono"]
    },
    {
        num: 6,
        question: "What is the famous quote King Leonidas told the Persian empire when they said our arrows will blot out the sun?",
        answer: "Wont it be nice then if we shall have shade in which to fight them!",
        options: ["We sleep safely at night because rough men stand ready to visit violence on those who would harm us", "I only regret that i have but one life to give for my country", "It is fatal to enter a war without the will to win it", "Wont it be nice then if we shall have shade in which to fight them!", "in the midst of chaos there is also opportunity"]
    },
    {   num: 7,
        question: "In the Marvel comics who is considered the balance of the realities of the multiverse and the judge of the multiverse?",
        answer: "Living Tribunal",
        options: ["Eternity", "Protege","Living Tribunal", "The Beyonder", "Arishem the judge"]
    },
    {
        num: 8,
        question: "Who has the most Grammys to this date?",
        answer: "Beyonce",
        options: ["Georg Solti", "Bruce springsteen","Quincy jones","Beyonce","Stevie wonder"]
    },
    {
        num: 9,
        question: "What is the name of this famous show that portrays a famous being known as a time lord?",
        answer: "Dr who",
        options: ["Dr who", "Star trek", "Mork and Mindy","Outer limits","Battle star Galatica"]
    },
    {
        num: 10,
        question: "Who is considered as the oldest blues artist to win a grammy?",
        answer: "Pinetop perkins",
        options: ["Buddy guy","Bobby rush","Kingfish","B.B king","Ronnie laws","Pinetop perkins"]
    }
  ]*/

  //got back over these
  
    /*init() {
        this.buttons();
        this.createQuesion();
        this.setNumOfQue();
        this.scoreMsg();
    }

    buttons() {
        const startSection = document.querySelector(".startSection")
        //const nextSection = document.querySelector(".nextSection")
        const sectionCard = document.querySelector(".sectionCard")
        const startBtn = document.querySelector(".start")
        const nextBtn = document.querySelector(".next")

        startBtn.addEventListener("click", () => {
            if(sectionCard.classList.contains("d-none")) {
               nextSection.classList.add("d-none") 
            }
        })
        
        nextBtn.addEventListener("click", () => {
            this.currentQuestion++
            this.createQuesion()
            this.setNumOfQue()
        })
    }


        //Attempt to load questions
        createQuesion() {
            //Create a new div...we did this in the online menu and im looking at examples from github as well to help me get throught this. 
            stGame.forEach(item => {
                const column = document.createElement("div")
                column.classList.add("col-md-3")

                const card = document.createElement("div");
                card.classList.add("card", "h-100");
    
                card.innerHTML = 
                <section class="sectionCard" id="sectionCard">
                            <div class="card-body">
                                <h4 class = "card-title text-capitalize item-item" id="questions">${item.item}</h4>
                            </div>
                        </section>
                
            })

        }*/

/*//Make your const variables

  //const yourScore = document.getElementById("yourScore");

  const startButton = document.getElementById("startButton");

  const nextButton = document.getElementById("nextButton");

//Working on scoring

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    //this will be another function to show to show the questions...i hope
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questions.innerHTML = questionNo + ". " + currentQuestion.question;

    //display the answers

    questions.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
    });

}

startQuiz();*/