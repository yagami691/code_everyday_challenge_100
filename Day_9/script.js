document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.sound-button');
    const audio = document.getElementById('audio');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            audio.src = soundFile;
            audio.play();
        });
    });
});
