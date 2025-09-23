const students = [
    { firstName: "آرمان", lastName: "احمدی" },
    { firstName: "ریحانه", lastName: "رضایی" },
    { firstName: "سامان", lastName: "محمدی" },
    { firstName: "پریسا", lastName: "اکبری" },
    { firstName: "نیلوفر", lastName: "شفیعی" },
    { firstName: "میلاد", lastName: "کریمی" },
    { firstName: "علیرضا", lastName: "کاظمی" },
    { firstName: "زهرا", lastName: "موسوی" },
    { firstName: "فرشاد", lastName: "جعفری" },
    { firstName: "سعید", lastName: "مرادی" },
    /* 390 نام دیگر را می‌توانید به لیست اضافه کنید */
];

const fathers = [
    { firstName: "حسین", lastName: "احمدی" },
    { firstName: "علی", lastName: "رضایی" },
    { firstName: "محمد", lastName: "محمدی" },
    { firstName: "کامران", lastName: "اکبری" },
    { firstName: "امیر", lastName: "شفیعی" },
    { firstName: "احمد", lastName: "کریمی" },
    { firstName: "رضا", lastName: "کاظمی" },
    { firstName: "مهدی", lastName: "موسوی" },
    { firstName: "فرزاد", lastName: "جعفری" },
    { firstName: "حمید", lastName: "مرادی" },
    /* 390 نام پدر دیگر را می‌توانید به لیست اضافه کنید */
];

const tbody = document.querySelector("tbody");

for (let i = 4; i <= 15; i++) {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    const randomFather = fathers[Math.floor(Math.random() * fathers.length)];
    const randomNationalId = Math.floor(Math.random() * 10000000000).toString();
    const randomGrade = Math.floor(Math.random() * 21);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${i}</td>
        <td>${randomStudent.firstName}</td>
        <td>${randomStudent.lastName}</td>
        <td>${randomFather.firstName}</td>
        <td>${randomFather.lastName}</td>
        <td>${randomNationalId}</td>
        <td>${randomGrade}</td>
    `;
    tbody.appendChild(row);
}

let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

