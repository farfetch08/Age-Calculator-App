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
let m2 = today.getMonth()+1;
let y2 = today.getFullYear();

let monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener("click", () => {
    // user input values
    d1 = parseInt(day.value);
    m1 = parseInt(month.value);
    y1 = parseInt(year.value);

    console.log(`DOB = ${d1}-${m1}-${y1}`);
    console.log(`Current Date = ${d2}-${m2}-${y2}`);
25
    if(d1==d2){
        btn.value ="🥳";
    }

    if(d1){
        // 08-5-2023 -- d2/m2/yyyy
        // 24-11-2002 --day/month/year
        // 14-5-20

        // calc output values   
        if(d2<d1){
            d2+=monthList[m2-1];
            dayInp.innerText = d2-d1;
            m2--;
        }
        
        if(m2<m1){
            m2+=12;
            monthInp.innerText = m2-m1;
            y2--;
        }
        

        dayInp.innerText = d2-d1;
        monthInp.innerText = m2-m1;
        yearInp.innerText = y2-y1;
    }
    else{
        dayInp.innerText = "- -";
        monthInp.innerText = "- -";
        yearInp.innerText = "- -";
    }

})


// this prevents page from refreshing on clicking submit button.

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("not refreshed");

    // clearing the input values after pressing submit button.
    day.value = "";
    month.value = "";
    year.value = "";
})
