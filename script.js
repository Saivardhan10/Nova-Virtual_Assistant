let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice")

function speak(text){
    let speak_text=new SpeechSynthesisUtterance(text);
    speak_text.rate=1;
    speak_text.pitch=1;
    speak_text.volume=1;
    speak_text.lang="en-GB";
    window.speechSynthesis.speak(speak_text)

}

function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }
    else{
        speak("Good evening sir")
    }
}

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new speechRecognition();

recognition.onresult=(event)=>{

    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    console.log(event);
    let textt=transcript.toLowerCase();
    takeCommand(textt)
}

btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(message){
    console.log(message)

    btn.style.display="block";
    voice.style.display="none";


    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir, how can i help you?")
    }
    else if(message.includes("who are you?")){
        speak("I am a virtual assistant created by saivardhan")
    }
    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com","_blank")
        speak("Opening Youtube")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com","_blank")
        speak("Opening Instagram")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com","_blank")
        speak("Opening facebook")
    }
    else if(message.includes("open google")){
        window.open("https://www.google.com","_blank")
        speak("Opening google")
    }
    else if(message.includes("open calculator")){
        window.open("calculator://")
        speak("Opening calculator")
    }
    else if(message.includes("open whatsapp")){
        window.open("whatsapp://")
        speak("Opening whatsapp")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    

    else{
        let finalText="this is what i found on internet regarding "+message.replace("nova","")||message.replace("novah","");
        speak(finalText);
        let text1=message.replace("nova","") || message.replace("novah","")
        window.open(`https://www.bing.com/search?q=${text1}`,"_blank");
    }

    // content.innerText="Click me to talk";

}