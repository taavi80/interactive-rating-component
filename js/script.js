const nums = document.querySelectorAll(".num");
const button = document.querySelector("button");
const userRating = document.querySelector(".userRating");
let rating = 0;

for (let num of nums) {
  num.addEventListener("click", () => {
    if (!num.classList.contains("active")) {
      if (rating !== 0) {
        nums[rating - 1].classList.remove("active");
      }
      num.classList.add("active");
      rating = parseInt(num.innerText);
    }
  });
}

button.addEventListener("click", () => {
  userRating.innerText = rating;
  document.querySelector(".state1").style.display = "none";
  document.querySelector(".state2").style.display = "block";
});
