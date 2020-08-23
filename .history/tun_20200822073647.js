let voteNumber = document.getElementById("voteNumber");
let progressBar = document.getElementById("myBar");
let vn = 10;
let maxVote = 10;
let nengiTotalVote = 0;
let ozoTotalVote = 0;
let kiddwayaTotalVote = 0;
let ericaTotalVote = 0;
let layconTotalVote = 0;
let dorathyTotalVote = 0;

const nengiMinus = document.getElementById("nengiMinus");
const nengiInput = document.getElementById("nengiInput");
const nengiPlus = document.getElementById("nengiPlus");

const ozoMinus = document.getElementById("ozoMinus");
const ozoInput = document.getElementById("ozoInput");
const ozoPlus = document.getElementById("ozoPlus");

const kiddwayaMinus = document.getElementById("kiddwayaMinus");
const kiddwayaInput = document.getElementById("kiddwayaInput");
const kiddwayaPlus = document.getElementById("kiddwayaPlus");

const ericaMinus = document.getElementById("ericaMinus");
const ericaInput = document.getElementById("ericaInput");
const ericaPlus = document.getElementById("ericaPlus");

const layconMinus = document.getElementById("layconMinus");
const laconInput = document.getElementById("layconInput");
const layconPlus = document.getElementById("layconPlus");

const dorathyMinus = document.getElementById("dorathyMinus");
const dorathyInput = document.getElementById("dorathyInput");
const dorathyPlus = document.getElementById("dorathyPlus");

const viewLeaderBtn = document.querySelector(".btn2");

const finishNotice = document.getElementById("finishNotice");

viewLeaderBtn.addEventListener("click", () => {
  if (vn !== 0) {
    finishNotice.classList.remove("d-none");
    setTimeout(() => {
      finishNotice.classList.add("d-none");
    }, 3000);
  } else {
    var totalVote = {
      nengi: nengiTotalVote,
      ozo: ozoTotalVote,
      kiddwaya: kiddwayaTotalVote,
      erica: ericaTotalVote,
      laycon: layconTotalVote,
      dorathy: dorathyTotalVote,
    };


    localStorage.setItem("totalVote", JSON.stringify(totalVote));

    location.href = "/leaderboard.html";
  }
});

nengiPlus.addEventListener("click", () => {
  if (vn > 0) {
    nengiInput.value++;
    nengiTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    console.log(vn);
    let voteLen = (vn / maxVote) * 100;
    console.log(voteLen);
    progressBar.style.width = `${voteLen}%`;
  }
});

nengiMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    nengiInput.value--;
    nengiTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    console.log(voteLen);
    progressBar.style.width = `${voteLen}%`;
  }
});

ozoPlus.addEventListener("click", () => {
  if (vn > 0) {
    ozoInput.value++;
    ozoTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

ozoMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    ozoInput.value--;
    ozoTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

kiddwayaPlus.addEventListener("click", () => {
  if (vn > 0) {
    kiddwayaInput.value++;
    kiddwayaTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

kiddwayaMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    kiddwayaInput.value--;
    kiddwayaTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

ericaMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    ericaInput.value--;
    ericaTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

ericaPlus.addEventListener("click", () => {
  if (vn > 0) {
    ericaInput.value++;
    ericaTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

layconMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    layconInput.value--;
    layconTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});
layconPlus.addEventListener("click", () => {
  if (vn > 0) {
    layconInput.value++;
    layconTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

dorathyMinus.addEventListener("click", () => {
  if (vn < maxVote) {
    dorathyInput.value--;
    dorathyTotalVote--;
    vn++;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});

dorathyPlus.addEventListener("click", () => {
  if (vn > 0) {
    dorathyInput.value++;
    dorathyTotalVote++;
    vn--;
    voteNumber.textContent = vn;
    let voteLen = (vn / maxVote) * 100;
    progressBar.style.width = `${voteLen}%`;
  }
});
