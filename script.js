// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voicesSelect = document.querySelector("select");
// let listenButton = document.querySelector("button");
// let textarea = document.querySelector("textarea");

// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
    
//     // Clear existing options
//     voicesSelect.innerHTML = "";

//     // Populate dropdown with voices
//     voices.forEach((voice, i) => {
//         const option = new Option(voice.name, i);
//         voicesSelect.add(option);
//     });

//     // Set default voice
//     speech.voice = voices[0];
// };

// voicesSelect.addEventListener("change", () => {
//     speech.voice = voices[voicesSelect.value];
// });

// listenButton.addEventListener("click", () => {
//     if (textarea.value.trim() !== "") {
//         speech.text = textarea.value;
//         window.speechSynthesis.speak(speech);
//     } else {
//         alert("Please enter some text in the textarea.");
//     }
// });

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesSelect = document.querySelector("select");
let listenButton = document.querySelector("button");
let textarea = document.querySelector("textarea");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    // Clear existing options
    voicesSelect.innerHTML = "";

    // Populate dropdown with voices
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voicesSelect.add(option);
    });

    // Set default voice
    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voicesSelect.addEventListener("change", () => {
    speech.voice = voices[voicesSelect.value];
});

listenButton.addEventListener("click", () => {
    if (textarea.value.trim() !== "") {
        speech.text = textarea.value;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text in the textarea.");
    }
});

// Call populateVoices initially to populate voices when the page loads
populateVoices();
