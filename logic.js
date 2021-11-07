let score = 0;
let time = 10;
let intervalId;

window.onload = function windowOnLoad() {
    this.startGame();
}

function setStartTime(){
    time = 10;
}

function setStartScore(){
    score = 0;
}

function startGame(){
    this.setStartScore();
    this.setStartTime();
    this.generateRandomFields();
    this.renderScore();
    this.renderTime();

    intervalId = setInterval( updateTime, 1000);
}

function generateRandomFields() {

    document.getElementById("content11").innerHTML = getRandomContent();
    document.getElementById("content12").innerHTML = getRandomContent();
    document.getElementById("content13").innerHTML = getRandomContent();
    document.getElementById("content21").innerHTML = getRandomContent();
    document.getElementById("content22").innerHTML = getRandomContent();
    document.getElementById("content23").innerHTML = getRandomContent();
    document.getElementById("content31").innerHTML = getRandomContent();
    document.getElementById("content32").innerHTML = getRandomContent();
    document.getElementById("content33").innerHTML = getRandomContent();
    
    }


function getRandomContent(){
    let random = Math.random() * 100;
    if( random > 50 ){
        return 'X'
    }else{
        return 'O'
    }
}

function cellClicked(elementClicked){
    if(elementClicked.innerHTML === document.getElementById("content22").innerHTML ){
        this.changeScore(score + 1);
    }
    this.generateRandomFields();
}

function changeScore(newScore){
    score = newScore;
    this.renderScore();
}

function renderScore(){
    let scoreText = new String('Score: ' + score)
    document.getElementById("score").innerHTML = scoreText;
}

function renderTime(){
    let timeText = new String('Time: ' + time)
    document.getElementById("timer").innerHTML = timeText;
}

function updateTime(){
    time = time - 1;
    if(time <= 0){
        time = 0;
        clearInterval(intervalId);
    }
    this.renderTime();

    if(time > 0){
        return;
    }

    endGame();

};

function endGame(){
    var endGameMessage = new String("End Game!\nScore: " + score);
    window.alert(endGameMessage);
    
    // this.startGame();
    this.navigateToStart();
}

function navigateToStart(){
    window.location.replace('index.html');
}