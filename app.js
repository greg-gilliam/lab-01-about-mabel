// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const quizButton = document.getElementById("click-me");
const results = document.getElementById("results");

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('what is your name?');
        const ans1 = prompt('do I like sleeping?');
        const ans2 = prompt('do I like squirrles?');
        const ans3 = prompt('do I like the ups guy?');
        console.log(name, ans1, ans2, ans3);
        let score = 0;
        if(ans1 === 'y' || ans1 === 'YES' || ans1 === 'yasss') {
            score ++;
        }
        if(ans2 === 'y' || ans2 === 'YES' || ans2 === 'yasss') {
            score ++;
        }
        if(ans3 === 'y' || ans3 === 'YES' || ans3 === 'yasss') {
            score ++;
        }
        console.log(score);
    } else {
        console.log('user canceled');
    }
});
