const nums = document.querySelectorAll(".num");
console.log(nums);

let active = false;
let rating = 0;

let numArr = [];

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (num.style.backgroundColor === "" && !active) {
      num.style.backgroundColor = "rgb(149, 158, 172)";
      num.style.color = "white";
      active = true;
      let number = parseInt(num.innerText);

      if (number > rating) {
        rating = number;
        console.log(rating);
      }
    } else {
      num.style.backgroundColor = "";
      num.style.color = "";
      active = false;
      rating = 0;
    }
  });
});
