// const emergency = document.getElementById('emergency').innerText
// const number = document.getElementById('number').innerText

// catched IdleDeadline,

//btn one
const button = document.getElementById("call-btn-1");
button.addEventListener("click", function () {
  alert("📞 " + "Calling National Emergency Service 999 ...");
});

//btn two

const button2 = document.getElementById("call-btn-2");
button2.addEventListener("click", function () {
  alert("📞 " + "Calling police 999 ...");
});

//btn three

const button3 = document.getElementById("call-btn-3");
button3.addEventListener("click", function () {
  alert("📞 " + "Calling Fire Service 999 ...");
});

// btn four

const button4 = document.getElementById("call-btn-4");
button4.addEventListener("click", function () {
  alert("📞 " + "Calling Ambulance 1994-999999 ...");
});

// btn five

const button5 = document.getElementById("call-btn-5");
button5.addEventListener("click", function () {
  alert("📞 " + "Calling Women & Child Helpline 109 ...");
});

// call btn six

const button6 = document.getElementById("call-btn-6");
button6.addEventListener("click", function () {
  alert("📞 " + "Calling Anti-Corruption 106 ...");
});

// btn seven

const button7 = document.getElementById("call-btn-7");
button7.addEventListener("click", function () {
  alert("📞 " + "Calling Electricity Outage 16216...");
});

//button 8

const button8 = document.getElementById("call-btn-8");
button8.addEventListener("click", function () {
  alert("📞 " + "Calling Brac 16216...");
});

//button9

const button9 = document.getElementById("call-btn-9");
button9.addEventListener("click", function () {
  alert("📞 " + "Calling Bangladesh Railway 16216...");
});







const callButtons = document.querySelectorAll(".call-btn");

const historyContainer = document.getElementById("adding_history");

function addToHistory(title, number) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("history-item");

  const p1 = document.createElement("p");
  p1.innerText = ` ${title}`;

  const p2 = document.createElement("p");
  p2.innerText = ` ${number}`;

  newDiv.appendChild(p1);
  newDiv.appendChild(p2);

  historyContainer.appendChild(newDiv);
  historyContainer.style.gap = "10px";
}










callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const title = card.querySelector("h3").innerText;
    const number = card.querySelector("h2").innerText;

    if (title && number) {
      addToHistory(title, number);
    }
  });
});






const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", () => {
  historyContainer.innerHTML = "";
  noHistory.style.color = "gray";
  historyContainer.appendChild(noHistory);
});







// ekadhik button clipbord korar jonnno code    ## most important thing









const copyButton = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButton.length; i++) {
  copyButton[i].addEventListener("click", function () {
    const creat = document.createElement("input");
    const text =
      this.parentElement.parentElement.getElementsByClassName("text")[0]
        .innerText;
    creat.value = text;
    document.body.appendChild(creat);
    creat.select();
    document.execCommand("copy");
    document.body.removeChild(creat);

    alert("copied " + text);
  });
}




const pointsElement = document.getElementById("points");
const allButtons = document.querySelectorAll(".call-btn");

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let currentPoints = parseInt(pointsElement.innerText);
    let newPoints = currentPoints - 20;

    if (newPoints < 0) {
      alert("You do not have enought points!");
    }
    if (newPoints < 0) {
      newPoints = 0;
    }
    pointsElement.innerText = newPoints;
  });
});







let copyCount = 0;

const copyBtn = document.querySelector('.copy-button')
const allCopyButton = document.querySelectorAll('.copy-btn')

for(let i =0 ; i<allCopyButton.length; i++){
    allCopyButton[i].addEventListener('click',function(){
    copyCount++;
    copyBtn.innerText = copyCount + ' Copy'
    })
}





