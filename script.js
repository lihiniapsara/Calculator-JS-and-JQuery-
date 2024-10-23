/*
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};*/
/*const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

buttons.forEach(button => {
    button.onclick = () => {
        const { id } = button;

        if (id === "clear") display.innerText = "";
        else if (id === "backspace") display.innerText = display.innerText.slice(0, -1);
        else if (id === "equal") {
            display.innerText = display.innerText ? eval(display.innerText) : "Empty!";
            if (!display.innerText) setTimeout(() => (display.innerText = ""), 2000);
        } else display.innerText += id;
    };
});

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
};*/
const display = document.querySelector("#display");
document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        if (button.id === "clear") display.innerText = "";
        else if (button.id === "backspace") display.innerText = display.innerText.slice(0, -1);
        else if (button.id === "equal") display.innerText = eval(display.innerText) || "Empty!";
        else display.innerText += button.id;
    };
});

document.querySelector(".theme-toggler").onclick = () => {
    document.querySelector(".calculator").classList.toggle("dark");
    document.querySelector(".theme-toggler").classList.toggle("active");
};
