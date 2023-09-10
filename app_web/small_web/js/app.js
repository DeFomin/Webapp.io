
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeTextButton");
    const textElement = document.getElementById("textContent");

    button.addEventListener("click", function () {
        textElement.textContent = "Текст изменен с помощью JS";
    });
});
