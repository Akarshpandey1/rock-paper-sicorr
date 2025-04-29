let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user");
let compscorepara = document.querySelector("#comp");


let getcompchoise = () =>{
   let options = [ "rock", "paper", "scissor"];
  let randomidx = Math.floor(Math.random()*3);
  return options[randomidx];

}

const draw = () => {
    msg.innerText = "The game is DRAW! Play again <3";
    msg.style.backgroundColor ="rgb(205, 141, 31)";
};

const showwinner = (userwin, userchoice, compchoice) => {
     if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `WoW, Victory : your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor ="green";
        
       } else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `Better luck next Time : ${compchoice} beats Your ${userchoice}.`;
        msg.style.backgroundColor ="red";
     }
}

const playgame = (userchoice) => {
    console.log(userchoice);
    let compchoice = getcompchoise();
    console.log(compchoice);
   

    if(userchoice === compchoice) {
        draw();
       
      
    }
    else {
        let userwin = true;
        
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false:true;
        }
        else if(userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        }
        else if(userchoice === "scissor"){
            userwin = compchoice === "rock" ? false : true;
        }
       showwinner(userwin, userchoice, compchoice);
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
       playgame(userchoice);
    });
});