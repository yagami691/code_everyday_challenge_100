
const textareaField = document.getElementById('textareaField');
const outputDiv = document.getElementById('output');


textareaField.addEventListener('input', function () {

    outputDiv.innerHTML = '';


    const text = textareaField.value.trim();

    text.split(',').forEach((char) => {
        const charElement = document.createElement('span');
        charElement.classList.add('character');
        charElement.textContent = char;
        outputDiv.appendChild(charElement);
        window.addEventListener("keydown", (event) => {
            if (event.key == "Enter") {
                charElement.classList.add("animation")
            }
        })
    });
});
