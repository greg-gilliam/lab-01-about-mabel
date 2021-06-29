// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Am I a dingo?');
        const ans2 = prompt('What is my middle name?');
        const ans3 = prompt('What thing do I love most?');
        console.log(name, ans1, ans2, ans3);
        let score = 0;
        if (ans1 === 'n' || ans1 === 'NO' || ans1 === 'noooo') {
            score ++;
        }
        if (ans2 === 'D' || ans2 === 'Dee' || ans2 === 'd') {
            score ++;
        }
        if (ans3 === 'treats' || ans3 === 'TREATS' || ans3 === 'treats!' || ans3 === 'TREATS!') {
            score ++;
        }
        console.log(score);
    } else {
        console.log('user canceled');
    }
});
