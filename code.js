//function for countdownTimer V1 for week 1-2
//Outdated funtion no longer called in product
function blastoffTimerV1() {
    console.log("start() function started");
    //created variable for time
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 1000)
    //8
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 2000)
    //7
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 3000)
    //6
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 4000)
    //5
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 5000)
    //4
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 6000)
    //3
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 7000)
    //2
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 8000)
    //1
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 9000)
    //Blast Off
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blast Off!";
    }, 10000)

}

//every line of code commented on...
function playCraps() {
    //logging the function playCraps has run
    console.log("playCraps Started;")

    //generate variables: die1 die2 sum

    //first dice
    var die1 = 1;
    //second dice
    var die2 = 1;
    //sum of dice 1 and dice 2
    var sum = 1;
    //roll the dice
    //roll the first dice
    die1 = Math.floor(Math.random() * 6 + 1);
    //roll the second dice
    die2 = Math.floor(Math.random() * 6 + 1);
    //log results of dice 1 and dice 2
    console.log(die1, die2);

    //get the sum of the two dice and save it in sum

    //sum di21 and die2
    sum = die1 + die2;
    //console log the sum value
    console.log("sum: " + sum)

    //follow the rules of Craps
    //tell the status in crapsStatus

    //Check if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsStatus").innerHTML = "Craps! - you lose, friend";
    }
    //check if dice are equal and even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsStatus").innerHTML = "DOUBLES! - you won, friend";
    }
    //catch all other cases that are not wins or loses
    else {
        document.getElementById("crapsStatus").innerHTML = "Tie, roll again friend!";
    }

}

function blastoffTimerV2() {
    //log the funcion ran to console
    console.log("blastoffTimerV2() started");
    //loop that runs 11 times, 10 for numbers 1 for blast off
    //Variable for countdown timer
    var countdownTimer = 10;
    var stepTime = 1000;
    var numberOfSteps = 11;

    //for loop to countdown from 10 to 0
    for (var i = 0; i < numberOfSteps; i++) {
        setTimeout(function () {
            console.log(countdownTimer);
            //If timer above halfway mark do normal countdown
            if(countdownTimer >5)
            {
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
            }
            //If less than half time left provide differnt notification
            else if(countdownTimer > 0){
                document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left " + countdownTimer;
                countdownTimer = countdownTimer - 1;
            }
            //Blast off once timer reaches 0
            else{
                document.getElementById("countdownStatus").innerHTML = "Blast Off!";
                console.log("BLast Off!");
            }
        }, stepTime * i)
    }
}

function startFun(){
    console.log("startFun() Ran");
    //bring information
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    //every 5 seconds run update display
    timer = setInterval(updateDisplay, time_interval)
    //disables start button and enables stop button
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stopFun(){
    console.log("stopFun() Ran");
    clearInterval(timer);
    //enables start button and disables stop button
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function playStation(){
    console.log("playStation() ran");
    //play spaceStation sounds here
    //creat object named mySound using us lab background
    mySound = new sound("us-lab-background.mp3");
    //play sound
    mySound.play();
}


//pass source file in function
function sound(srcFile){
    console.log("sound() ran");
    //builds sound atrtributes of "this" object
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    //applies sttributes to sound
    document.body.appendChild(this.sound);
    //plays sound
    this.play = function(){
        this.sound.play();
    }
    //stops sound
    this.stop = function(){
        this.sound.pause();
    }
}