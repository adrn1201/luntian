const userCredentials = {
    employee: {
        username: "201833792492",
        password: "iloveunionbankhehe",
    },
    student: {
        username: "11946790",
        password: "unionbankisthebest",
    },
};

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        username.value === userCredentials.employee.username &&
        password.value === userCredentials.employee.password
    ) {
        window.location.href = "index.html";
    } else if (
        username.value === userCredentials.student.username &&
        password.value === userCredentials.student.password
    ) {
        window.location.href = "index.html";
    } else {
        alert("user doesn't exist");
    }
});