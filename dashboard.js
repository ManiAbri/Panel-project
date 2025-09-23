let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

// new codes for nemodar students

const gradeChartCanvas = document.getElementById("grade-chart");
const gradeChart = new Chart(gradeChartCanvas, {
    type: "bar",
    data: {
        labels: ["هنر ", "کار و فناوری ", "ریاضی", "ادبیات فارسی "],
        datasets: [{
            label: "نمودار نمرات دانش‌آموزان",
            data: [45, 20, 0, 100],
            backgroundColor: ["#337ab7", "#337ab7", "#337ab7", "#337ab7"],
            borderColor: ["#337ab7", "#337ab7", "#337ab7", "#337ab7"],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// new nemodar for teacher
const teacherSatisfactionChartCanvas = document.getElementById("teacher-satisfaction-chart");
const teacherSatisfactionChart = new Chart(teacherSatisfactionChartCanvas, {
    type: "pie",
    data: {
        labels: ["هنر (صلح کننده)", "کار و فناوری (ساکیان)", "ریاضی(گلفرشچی)", "ادبیات فارسی (حرمتی)"],
        datasets: [{
            label: "میزان رضایت از دبیران",
            data: [20, 100, 35, 85],
            backgroundColor: ["#07883f", "#b00768", "#337ab7", "#7961d8"],
            borderColor: ["#fffff", "#fffff", "#fffff", "#fffff"],
            borderWidth: 1
           
            
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            }
        }
    }
});

