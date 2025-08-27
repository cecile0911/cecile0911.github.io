const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent= "This is my new heading";
topHeading.style.color="red";
const firstPara = document.querySelector("p");
console.log(firstPara);
const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);
const allParas= document.querySelectorAll("p");
console.log(allParas);
// console.log(allParas.textContent);
for(let i=0; i<allParas.length; i++)
{
    console.log("Para",i,":",allParas[i].textContent);
    // allParas[i].style.backgroundColor="gray";
    allParas[i].classList.add("para-style");
}
const allAnothers =document.querySelectorAll(".another");
console.log(allAnothers);
for(let i=0; i<allAnothers.length; i++)
{
    console.log("Elements with class another",i,":",allAnothers[i].textContent);
}

function toggleMe()
{
    const myImg = document.querySelector("img");
    console.log(myImg);
    myImg.classList.toggle("round");
}