function checkWeather() {
  const temp = document.querySelector("#myTemp");
  const body = document.querySelector("body");
  console.log(temp);
  const t = temp.value;
  console.log(t);
  if (t > 40) {
    console.log("it's super hot");
    body.style.backgroundColor = "red";
  } else if (t <= 40 && t > 30) {
    console.log("it's sunny and warm");
    body.style.backgroundColor = "orange";
  } else if (t <= 30 && t > 18) {
    console.log("it's quite pleasant");
    body.style.backgroundColor = "green";
  } else if (t <= 18 && t > 8) {
    console.log("it's quite cold");
    body.style.backgroundColor = "skyblue";
  } else if (t <= 8) {
    console.log("it is freeeezzzzing");
    body.style.backgroundColor = "blue";
  }
}
