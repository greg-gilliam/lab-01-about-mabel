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
        const ans2 = prompt('Is celery my favorite treat?');
        const ans3 = prompt('Am I a dog?');
        const ans4 = prompt('Do we think I am a kelpie mutt?');
        console.log(name, ans1, ans2, ans3, ans4);
        let score = 0;
        if (ans1 === 'n' || ans1 === 'NO' || ans1 === 'noooo' || ans1 === 'no') {
            score ++;
        }
        if (ans2 === 'y' || ans2 === 'YES' || ans2 === 'Yassss' || ans2 === 'yes') {
            score ++;
        }
        if (ans3 === 'y' || ans3 === 'YES' || ans3 === 'Yassss' || ans3 === 'yes') {
            score ++;
        }
        if (ans4 === 'y' || ans4 === 'YES' || ans4 === 'Yassss' || ans4 === 'yes') {
          score ++;
      }
        console.log(score);
        results.textContent = `You got ${score} right!`;
    } else {
        console.log('user canceled');
    }
});