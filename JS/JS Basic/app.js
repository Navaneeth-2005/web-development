const max=prompt("enter the maximum number");
console.log(max);

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true){

    if(guess=="quit"){
        console.log("user quit");
        break;

    }
    if(guess==random){
        prompt("you are right");
        break;
    }
    else if(guess<random){
        guess=prompt("guess was small,please try again");
    }
    else{
        guess=prompt("you guess is large,please try again");
    }
    


}