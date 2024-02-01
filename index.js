let holes = document.querySelectorAll('.hole');
let score = 0;

function getRandomHole() {
  let randomIndex = Math.floor(Math.random() * holes.length);
  return holes[randomIndex];
}

function peep() {
  let hole = getRandomHole();
  hole.style.fontSize = '5vw';
  hole.textContent = '🥺';

  setTimeout(() => {
    hole.textContent = '';
    
    if (score < 23) {
      peep();
    } else {
      let scoreStatus = document.querySelector('h1');
      scoreStatus.textContent = `${score}` + ' SADZ GONE';
      score = 0;
    }
  }, 400);
}

function whack(hole) {
  if (hole.textContent === '🥺') {
    score++;
    hole.textContent = '';
  }
}

peep();

function restartPage() {
  location.reload();
}
