// input
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");


// button
let btn = document.querySelector(".submit-btn");

// output
let yearInp = document.querySelector(".i-years");
let monthInp = document.querySelector(".i-months");
let dayInp = document.querySelector(".i-days");

// getting todays date
let today = new Date();

let d2 = today.getDate();
let m2 = today.getMonth() + 1;
let y2 = today.getFullYear();

let monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let labelInput = document.querySelectorAll(".label-input");
let promptTxt = document.querySelectorAll(".prompt-txt");

year.setAttribute("max", y2);



btn.addEventListener("click", () => {
    // user input values
    d1 = parseInt(day.value);
    m1 = parseInt(month.value);
    y1 = parseInt(year.value);

    console.log(`DOB = ${d1}-${m1}-${y1}`);
    console.log(`Current Date = ${d2}-${m2}-${y2}`);

    if ((d1 == d2) && (m1 == m2 )&& y1  && (y1>1 && y1<y2)) {
        btn.value = "🥳";
        promptTxt[0].innerText = "Happy😊";
        promptTxt[1].innerText = "Birthday🍰";
        promptTxt[2].innerText = "Day!🎉";
        labelInput[0].style.color = "hsl(0, 1%, 44%)";
        labelInput[1].style.color = "hsl(0, 1%, 44%)";
        labelInput[2].style.color = "hsl(0, 1%, 44%)";
        for (let i = 0; i < 3; i++) {
            promptTxt[i].classList.add("birthday-txt");
        }
    }
    else {
        btn.value = ">";
        promptTxt[0].innerText = "";
        promptTxt[1].innerText = "";
        promptTxt[2].innerText = "";
        for (let i = 0; i < 3; i++) {
            promptTxt[i].classList.remove("birthday-txt");
        }
    }

    if (d1 && m1 && y1) {
        // 08-5-2023 -- d2/m2/yyyy
        // 24-11-2002 --day/month/year
        // 14-5-20

        // calc output values   
        if (d2 < d1) {
            d2 += monthList[m2 - 1];
            dayInp.innerText = d2 - d1;
            m2--;
        }
        else {
            dayInp.innerText = d2 - d1;
        }

        if (m2 < m1) {
            m2 += 12;
            monthInp.innerText = m2 - m1;
            y2--;
        }
        else {
            monthInp.innerText = m2 - m1;
        }

        yearInp.innerText = y2 - y1;
    }
    else {
        dayInp.innerText = "- -";
        monthInp.innerText = "- -";
        yearInp.innerText = "- -";
    }

    if (!d1) {
        labelInput[0].style.color = "#f01313";
        promptTxt[0].innerText = "This field is required";
    }
    if (d1 < 1 || d1 > 31) {
        labelInput[0].style.color = "#f01313";
        promptTxt[0].innerText = "Must be a valid day";
    }
    if (!m1) {
        labelInput[1].style.color = "#f01313";
        promptTxt[1].innerText = "This field is required";
    }
    if (m1 < 1 || m1 > 12) {
        labelInput[1].style.color = "#f01313";
        promptTxt[1].innerText = "Must be a valid month";
    }
    if (!y1) {
        labelInput[2].style.color = "#f01313";
        promptTxt[2].innerText = "This field is required";
    }
    if (y1 < 1 || y1 > y2) {
        labelInput[2].style.color = "#f01313";
        promptTxt[2].innerText = "Must be in the past";
    }




    // clearing the input values after pressing submit button.
    day.value = "";
    month.value = "";
    year.value = "";

})


// this prevents page from refreshing on clicking submit button.

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("not refreshed");

})


