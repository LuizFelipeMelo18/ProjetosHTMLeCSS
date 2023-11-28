let falar = new SpeechSynthesisUtterance();
let vozes = [];
let vozSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    vozes = window.speechSynthesis.getVoices();
    falar.voice = vozes[0];

    vozes.forEach((voice, i) => (vozSelect.options[i] =  new Option(voice.name, i)));
};

vozSelect.addEventListener("change", () =>{
    falar.voice = vozes[vozSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    falar.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(falar);
});