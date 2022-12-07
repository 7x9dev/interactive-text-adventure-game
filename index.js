let backBtn = document.querySelector("#btnOne");
backBtn.onmouseover = function (e) {
   backBtn.innerHTML = `Change the past!`;
}
backBtn.onmouseout = function (e) {
   backBtn.innerHTML = `<i class="fa-solid fa-backward"></i> Go back in time`;
};

let futureBtn = document.querySelector("#btnTwo");
futureBtn.onmouseover = function (e) {
   futureBtn.innerHTML = `Back to the future!`;
};
futureBtn.onmouseout = function (e) {
   futureBtn.innerHTML = `Go to the future <i class="fa-solid fa-forward"></i>`;
};