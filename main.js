
const subBto = window.document.querySelector('button')

const res_year = window.document.querySelector('.res_year span')
const res_month = window.document.querySelector('.res_month span')
const res_day = window.document.querySelector('.res_day span')

const input_year = window.document.getElementById('year')
const input_month = window.document.getElementById('month')
const input_day = window.document.getElementById('day')

const year_errorMsg = window.document.querySelector('.year p')
const month_errorMsg = window.document.querySelector('.month p')
const day_errorMsg = window.document.querySelector('.day p')

const yearlabel_errorMsg = window.document.querySelector('.input-wrapper .year label')
const monthlabel_errorMsg = window.document.querySelector('.input-wrapper .month label')
const daylabel_errorMsg = window.document.querySelector('.input-wrapper .day label')  

function calcYear(year, month, day) {
 
    const currentYear = new Date().getFullYear()
    const currentMonth = (new Date().getMonth() + 1)
    const currentDay = new Date().getDate()
    let yearsOld = Number(currentYear - year.value)
    let monthsOld
    let daysOld 

    //condition to year
    if (currentYear == year.value) {
        yearsOld == 0 
    }

    //conditions to months
     
    if (currentMonth < month.value && currentDay > day.value) {
        monthsOld = (12 - month.value) + (currentMonth)
        yearsOld = yearsOld - 1 
    }

    if (currentMonth < month.value && currentDay < day.value) {
        monthsOld = (12 - month.value) + (currentMonth - 1)
        yearsOld = yearsOld - 1 
    }

    if (currentMonth > month.value) {
        monthsOld = (currentMonth - month.value)
    }

    if ((currentMonth == month.value) && (currentDay < day.value)) {
        monthsOld = 11
    } 

    if ((currentMonth == month.value) && (currentDay >= day.value)) {
        monthsOld = 0
        daysOld = currentDay -  day.value
    }

    if ((currentMonth == month.value) && (currentDay < day.value)) {
        yearsOld = yearsOld - 1
        monthsOld = 11
        daysOld = day.value - currentDay
    }


   
    //conditions to days    
    
    var date = new Date();
    var lastday = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    if (currentDay > day.value) {
        daysOld = currentDay - day.value
    }
    
    if (currentDay < day.value && currentYear != year.value && currentMonth < month.value) {
        
        daysOld = (lastday - day.value) + currentDay
    }

    if (currentDay > day.value && currentMonth < month.value) {
        daysOld = currentDay - day.value
    }


    res_year.innerHTML = yearsOld
    res_month.innerHTML = monthsOld
    res_day.innerHTML = daysOld
}

function validateYear(year) {
    if (year.value == "") {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        year_errorMsg.innerHTML = "This field can't be empty"
        yearlabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if (year.value > new Date().getFullYear()) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        year_errorMsg.innerHTML = "Must be in the past"
        yearlabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    }
    
    else {
        year_errorMsg.innerHTML = ""
        yearlabel_errorMsg.style.color = "hsl(0, 1%, 44%)"
    } 
}
   
function validateMonth(month) {
    if (month.value == "") {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        month_errorMsg.innerHTML = "This field can't be empty"
        monthlabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if (month.value > (new Date().getMonth() + 1) && year.value == new Date().getFullYear() || (month.value > 12 || month.value < 1)) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        month_errorMsg.innerHTML = "Must be a valid month"
        monthlabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } 
    
    else {
        month_errorMsg.innerHTML = ""
        monthlabel_errorMsg.style.color = "hsl(0, 1%, 44%)"
    } 
}

function validateDay(day) {
    
    if (day.value == "") {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "This field can't be empty"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if (day.value > 31) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "Must be a valid day"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if ((day.value > new Date().getDate()) && (month.value == (new Date().getMonth() + 1)) && (year.value == new Date().getFullYear())) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "Must be a valid day"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if ((input_month.value < 8 || input_month.value ==! 2) && (input_month.value % 2) === 0 && day.value > 30) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "Must be a valid day"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if ((input_month.value > 8) && (input_month.value % 2) ==! 0 && day.value > 30) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "Must be a valid day"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    } else if ((input_month.value == 2) && (day.value > 28) && (input_year.value % 4) != 0 && (input_year.value % 400) != 0) {
        res_day.innerHTML = "--"
        res_month.innerHTML = "--"
        res_year.innerHTML = "--"
        day_errorMsg.innerHTML = "Must be a valid day"
        daylabel_errorMsg.style.color = "hsl(0, 100%, 67%)"
    }
    else {
        day_errorMsg.innerHTML = ""
        daylabel_errorMsg.style.color = "hsl(0, 1%, 44%)"
    }  
} 


subBto.addEventListener('click', () => {
    calcYear(input_year, input_month, input_day)
    validateYear(input_year)
    validateMonth(input_month)
    validateDay(input_day) 
})