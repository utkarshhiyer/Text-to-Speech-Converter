let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select"); // Make sure to use the correct selector
let button = document.querySelector("button"); // Add a selector for the button

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
