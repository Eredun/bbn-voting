const housemates = [
  {
    name: 'Ozo',
    votes: 0,
  },
  {
    name: 'Prince',
    votes: 0
  },
  {
    name: 'Lilo',
    votes: 0
  },
  {
    name: 'Vee',
    votes: 0
  },
  {
    name: 'TrickyTee',
    votes: 0
  },
  {
    name: 'Erica',
    votes: 0
  }
];

let votes = 30 ;
let totalVotes = 30

const minusBtn = document.querySelectorAll(".minus");
const addBtn = document.querySelectorAll(".plus");
const inputVotes = document.querySelectorAll(".votes");
const progressBar = document.querySelector('.progress');
console.log(inputVotes);

let votesCounter = (document.querySelector(".total-marks"));
votesCounter.textContent = votes

console.log(votesCounter);

const subTotalVotes = () => {
  if (votes === 0) {
    votes = 0;
  } else {
    votes -= 1;
  }
  votesCounter.textContent = votes;
};

const subVotes = () => {
  if (votes === 0) {
    votes = 0
  } else {
    votes -= 1
  }
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
      console.log(housemates);
    } else {
      console.log('Hello');
      subVotes();
      inputVotes[i].value++;
      let calc = 100 -((totalVotes -votes)/totalVotes * 100);
      console.log(calc);
      progressBar.style.width = `${calc}%`;
      housemates[i].votes = parseInt(inputVotes[i].value);
      console.log(housemates);
    }
  })
}


for(let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener('click', e => {
    if (parseInt(inputVotes[i].value) === 0) {
      inputVotes[i].value = 0
      console.log(inputVotes[i].value);
    } else {
      addVotes();
      inputVotes[i].value--
      let calc = 100 -((10 -votes)/10 * 100);
      console.log(calc);
      progressBar.style.width = `${calc}%`;
      housemates[i].votes = parseInt(inputVotes[i].value);
      console.log(housemates);
    }
  })
}

var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
console.log(keysSorted); 










  
  //   if (votes === 0) {
  //     value = value
  //   } else {
  //   }
  // }



// addBtn[0].addEventListener('click', e => {
//   addVote();
// });

// addBtn[1].addEventListener('click', e => {
//   addVote();
// });

// for (j = 0; j < 6; j++) {

// }

// const contestants = {
//   totalMarks: 100,
//   users: [
//     {
//       name: "Erica",
//       votes: 0,
//       id: 0,
//       imgSrc: "./img/Erica.jpg",
//     },
//     {
//       name: "Lilo",
//       votes: 0,
//       id: 1,
//       imgSrc: "./img/Lilo.jpg",
//     },
//     {
//       name: "Ozo",
//       votes: 0,
//       id: 2,
//       imgSrc: "./img/Ozo.jpg",
//     },
//     {
//       name: "Prince",
//       votes: 0,
//       id: 3,
//       imgSrc: "./img/Prince.jpg",
//     },
//     {
//       name: "TrikyTee",
//       votes: 0,
//       id: 4,
//       imgSrc: "./img/TrikyTee.jpg",
//     },
//     {
//       name: "Vee",
//       votes: 0,
//       id: 5,
//       imgSrc: "./img/Vee.jpg",
//     },
//   ],
// };

// total.textContent = contestants.totalMarks;

// //Input Validation
// const selectName = $(".name");
// const inputVote = $(".number-of-votes");
// const addVote = $(".add-vote");
// const inputError = $(".input-error");

// //Insert users in the option tag in the select tag

// contestants.users.map((user)=>{
//   let option = document.createElement("option");
//   option.value = user.name;
//   option.innerHTML = user.name;
//   selectName.appendChild(option)
// })

// selectName.onchange = function(){

// }

// inputVote.onkeyup = function () {
//   this.value > contestants.totalMarks
//     ? (inputError.innerHTML = "vote should'nt be greater than the total marks")
//     : (inputError.innerHTML = "");
// };

// addVote.addEventListener("click", () => {
//  if(inputVote.value == "" || selectName.value == ""){
//  (inputError.textContent = "Please input a name and a number of votes")
//  return;
//  }else{
//   (inputError.value = "");
//  }
//   contestants.users.map((user) => {
//       if (user.name == selectName.value) {
//         user.votes += +inputVote.value;
//         contestants.totalMarks -= +inputVote.value;
//         progressBar.style.width = contestants.totalMarks + "%";
//         total.textContent = contestants.totalMarks;
//         userVotes.forEach((uservote, voteIndex) => {
//           user.id == voteIndex ? (uservote.textContent = user.votes) : "";
//        });
//         selectName.value = "";
//        inputVote.value = "";
//       }

//   });
// });

// //Display username
// const displayUserInfo = () => {
//   contestants.users.map((user) => {
//     userNames.forEach((username, ElementIndex) => {
//       user.id == ElementIndex ? (username.textContent = user.name) : "";
//     });

//     userVotes.forEach((uservote, voteIndex) => {
//       user.id == voteIndex ? (uservote.textContent = user.votes) : "";
//     });
//     userImages.forEach((userImg, imgIndex) => {
//       user.id == imgIndex ? (userImg.src = user.imgSrc) : "";
//     });
//   });
// };
// displayUserInfo();

// //Add vote to the user's score
// addBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     contestants.users.map((user, mapIndex, users) => {
//       if (contestants.totalMarks == 0 || user.votes == 100) return;
//       if (index === user.id) {
//         users[index].votes++;
//         contestants.totalMarks--;
//         total.textContent = contestants.totalMarks;
//         progressBar.style.width = contestants.totalMarks + "%";
//       }
//       userVotes.forEach((uservote, voteIndex) => {
//         voteIndex == user.id ? (uservote.textContent = user.votes) : "";
//       });
//     });
//   });
// });

// //Subtract vote to the user's score
// subtractBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     contestants.users.map((user, mapIndex, users) => {
//       if (contestants.totalMarks == 100 || user.votes == 0) return;
//       if (index === user.id) {
//         contestants.totalMarks++;
//         users[index].votes--;
//         total.textContent = contestants.totalMarks;
//         progressBar.style.width = contestants.totalMarks + "%";
//       }
//       userVotes.forEach((uservote, voteIndex) => {
//         voteIndex == user.id ? (uservote.textContent = user.votes) : "";
//       });
//     });
//   });
// });

// counts.forEach((count, index) => {
//   count.innerHTML = index + 1;
// });

// //Animate
// const viewBoard = $(".view");
// const backToVote = $(".back");
// const leaderboard = $(".leaderboard");

// //Sorting out according to position and votes

// let newUsers = [];
// const redirectToBoard = () => {
//   let errors = $(".error");
//   if (contestants.totalMarks !== 0) {
//     errors.innerHTML = "*Finish the vote";
//     return;
//   }
//   errors.innerHTML = "";
//   leaderboard.style.opacity = 1;
//   leaderboard.style.pointerEvents = "auto";
//   // LeaderboardImgs.forEach((img) => {});
//   let users2 = contestants.users.map((u) => Object.assign({}, u));
//   let userVotes = [];
//   users2.map((user, index) => {
//     //4
//     userVotes.push(user.votes);
//     userVotes.sort((a, b) => b - a);
//     userVotes.includes(user.votes)
//       ? newUsers.splice(userVotes.indexOf(user.votes), 0, user)
//       : "";
//   });
//   //  console.log(newUsers)
//   newUsers.map((user, index, users) => {
//     LeaderboardNames.forEach((username, ElementIndex) => {
//       index == ElementIndex ? (username.textContent = user.name) : "";
//     });
//     LeaderboardImgs.forEach((userImg, ElementIndex) => {
//       index == ElementIndex ? (userImg.src = user.imgSrc) : "";
//     });
//     lastUser = users[users.length - 1].name;
//     eviction.innerHTML = `${lastUser} was evicted`;
//   });
// };
// const redirectToVote = () => {
//   leaderboard.style.opacity = 0;
//   leaderboard.style.pointerEvents = "none";
//   newUsers = [];
// };

// viewBoard.onclick = redirectToBoard;
// backToVote.onclick = redirectToVote;

// setInterval(function(){
//   if(contestants.totalMarks == 0){
//     addVote.disabled = true;
//     addVote.style.opacity = 0.4;
//   }else{
//     addVote.disabled = false;
//     addVote.style.opacity = 1;
//   }
// },10)
