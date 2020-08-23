

const getContestants = () => {
  const strHousemates = localStorage.getItem('housemates');

  if (!strHousemates) {
    return [];
  } else {
    let housemates = JSON.parse(strHousemates);
    return housemates.sort((a, b) => (a.votes < b.votes) ? 1 : (a.votes === b.votes) ? ((a.name > b.name) ? 1 : -1) : -1);
  }
  // return housemates;
}
// const newContestants = getContestants();




let housemates = [
  {
    name: 'Ozo',
    votes: 0,
    id: 0,
    img: './img/Ozo.jpg'
  },
  {
    name: 'Prince',
    votes: 0,
    id: 1,
    img: './img/Prince.jpg'
  },
  {
    name: 'Lilo',
    votes: 0,
    id: 1,
    img: './img/Lilo.jpg'
  },
  {
    name: 'Vee',
    votes: 0,
    id: 1,
    img: './img/Vee.jpg'
  },
  {
    name: 'TrickyTee',
    votes: 0,
    id: 1,
    img: './img/TrickyTee.jpg'
  },
  {
    name: 'Erica',
    votes: 0,
    id: 1,
    img: './img/Erica.jpg'
  }
];

let votes = 30;
let totalVotes = 30

const minusBtn = document.querySelectorAll(".minus");
const addBtn = document.querySelectorAll(".plus");
const inputVotes = document.querySelectorAll(".votes");
const progressBar = document.querySelector('.progress');
const btn = document.querySelector('.view');
const span = document.querySelector('.error');
const leaderboard = document.querySelector('.leaderboard');
const leaderboardNames = document.querySelectorAll('.leaderboard .username');
const leaderboardImages = document.querySelectorAll('.leaderboard img');
const evictedUser = document.querySelector('.evicted-user');
console.log(inputVotes);

let votesCounter = (document.querySelector(".total-marks"));
votesCounter.textContent = votes

console.log(votesCounter);

console.log(leaderboardImages);


const subTotalVotes = () => {
  if (votes === 0) {
    votes = 0;
  } else {
    votes -= 1;
  }
  votesCounter.textContent = votes;

};

const subVotes = () => {
  votes -= 1
  votesCounter.textContent = votes;
}

const addVotes = () => {
  votes += 1;
  votesCounter.textContent = votes;
}


for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', e => {
    if (votes === 0) {
      inputVotes[i].value = inputVotes[i].value;
    } else if (votes < 1) {
      console.log(housemates);
    }
    else {
      // console.log('Hello');
      subVotes();
      inputVotes[i].value++;
      let calc = 100 - ((totalVotes - votes) / totalVotes * 100);
      // console.log(calc);
      progressBar.style.width = `${calc}%`;
      housemates[i].votes = parseInt(inputVotes[i].value);
      localStorage.setItem('housemates', JSON.stringify(housemates));
    }
  })
}


for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener('click', e => {
    if (parseInt(inputVotes[i].value) === 0) {
      inputVotes[i].value = 0
      // console.log(inputVotes[i].value);
    } else {
      addVotes();
      inputVotes[i].value--
      let calc = 100 - ((totalVotes - votes) / totalVotes * 100);
      // console.log(calc);
      progressBar.style.width = `${calc}%`;
      housemates[i].votes = parseInt(inputVotes[i].value);
    }
    // console.log(housemates);
  })
}
console.log(leaderboardNames);

btn.addEventListener('click', e => {
  if (votesCounter.textContent <= 0) {
    let newContestants = getContestants();
    console.log(newContestants);
    leaderboard.style.opacity = 1;
    leaderboard.style.pointerEvents = 'auto';


    newContestants.map((contestant, index, newContestants) => {
        leaderboardNames.forEach((username, elIndex) => {
          if(index === elIndex) {
            console.log(contestant.name);
            console.log(username);
            username.textContent = contestant.name;
          } 
          // else {
          //   ''
          // }
        });
        leaderboardImages.forEach((userImage, elIndex) => {
          if (index === elIndex) {
            userImage.src = contestant.img;
          }
        });

        leaderboardVotes.forEach((vote, elIndex) => {
          if (index === elIndex) vote.textContent
        })

        lowVoteUser = newContestants[newContestants.length - 1].name;
        evictedUser.innerHTML = `${lowVoteUser} has been evicted!`;
    });
  } else {
    span.classList.remove('error');
    setTimeout(() => {
      span.classList.add('error');
    }, 3000);
  }
})



// <div class="leaderboard">
// <div class="card">
//   <h2>Leaderboard</h2>

  // <div class="user-info">
  //   <div class="user">
  //     <div class="user-img">
  //       <img src="" alt="" />
  //     </div>
  //     <div class="user-text">
  //       <p class="username"></p>
  //       <div class="marks">
  //         <span></span>
  //       </div>
  //     </div>
  //   </div>
  //  </div>






const people = [
  {
    name: 'Adam',
    age: 10
  },
  {
    name: 'Mutiat',
    age: 12
  }
]

const me = people.sort((a, b) => (a.age < b.age) ? 1 : -1);

console.log(me);

































// class System {
//   constructor() {
//     this.votes = 30;
//     this.totalVotes = 30
//     this.remainingVotes = this.totalVotes - this.votes;
//     this.minusBtn = document.querySelectorAll(".minus");
//     this.addBtn = document.querySelectorAll(".plus");
//     this.inputVotes = document.querySelectorAll(".votes");
//     this.progressBar = document.querySelector('.progress');
//     this.votesCounter = (document.querySelector(".total-marks"));
//     votesCounter.textContent = votes;
//     this.housemates = [
//       {
//         name: 'Ozo',
//         votes: 0,
//       },
//       {
//         name: 'Prince',
//         votes: 0
//       },
//       {
//         name: 'Lilo',
//         votes: 0
//       },
//       {
//         name: 'Vee',
//         votes: 0
//       },
//       {
//         name: 'TrickyTee',
//         votes: 0
//       },
//       {
//         name: 'Erica',
//         votes: 0
//       }
//     ];
//   }
//   subTotalVotes() {
//     if (this.votes === 0) {
//       this.votes = 0;
//     } else {
//       this.votes -= 1;
//     }
//     votesCounter.textContent = this.votes;
//   };
//   subVotes() {
//     if (votes === 0) {
//       this.votes = 0
//     } else {
//       this.votes -= 1
//       console.log(this.votes);
//     }
//     votesCounter.textContent = this.votes;
//   }
//   getVoteIncrement() {
//     for (let i = 0; i < addBtn.length; i++) {
//       this.addBtn[i].addEventListener('click', e => {
//         if (this.votes === 0) {
//           this.inputVotes[i].value = this.inputVotes[i].value;
//           console.log(this.housemates);
//         } else {
//           console.log('Hello');
//           this.subVotes();
//           console.log('New votes:', this.votes);
//           this.inputVotes[i].value++;
//           let calc = 100 - (this.totalVotes - this.votes)/this.totalVotes * 100;
//           console.log(calc);
//           console.log('remain: ', this.remainingVotes);
//           progressBar.style.width = `${calc}%`;
//           this.housemates[i].votes = parseInt(this.inputVotes[i].value);
//           localStorage.setItem('housemates', JSON.stringify(this.housemates));

//           console.log(this.housemates);
//         }
//       })
//     }
//     return this.housemates;
//   }
// }

// window.addEventListener('DOMContentLoaded', e => {

//   const voteSystem = new System();
//   console.log(voteSystem.getVoteIncrement());
//   console.log(voteSystem.housemates);


// })
// window.addEventListener('click', e => {
//   voteS = new System();

