let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#system");

const showWinner = (userwin) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("User win");
        msg.innerText = "You won!"
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        console.log("Computer Win");
        msg.innerText = "You Lose."
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const getCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor( Math.random() * 3)
    return options[randIdx];
}

const playGame = (userChoice) =>{
    console.log("User Choice = " , userChoice);
    // Generate computer choice ->modular
    const compChoice = getCompChoice();
    console.log("Computer Choice = " , compChoice);

    if( userChoice === compChoice ){
        drawGame();
    }else{
        let userwin = true;
        if( userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){

            userwin = compChoice === "scissor" ? false : true;
        }
        else{
            userwin = compChoice === "rock"  ? false : true;
        }
        showWinner(userwin)
    }

    
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
