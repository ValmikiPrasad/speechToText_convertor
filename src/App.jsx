import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
const App=()=>{
    const commands=[
        {
            command:"reset",
            callback:({resetTranscript})=>resetTranscript()
        },
        {
            command:"open *",
            callback:(site)=>{
                window.open('http://'+site)
            }
        }
    ]
    const [copy,setCopy]=useState();
    const [isCopied, setCopied] = useClipboard(copy);
   const startListening=()=>{
    SpeechRecognition.startListening({ continuous: true,language:'en-IN' })
   } 

   
    const { transcript, resetTranscript} = useSpeechRecognition({commands})

    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return null
      }
    return(
        <div className="container">
            <h2>
                speech to text convertor
            </h2>
            <br/>
            <p>Lorem ipsum dolorat, soluta architecto expedita velit?r sit amet consectetur adipisicing elit. ,tenetur quaerat, s Quos!</p>
            <div className="main-content" onClick={()=>setCopy(transcript)}>
                {transcript}
            </div>
            <div className="btn-style">
            <button onClick={setCopied}>
       {isCopied ? "copied 👍" : "copy to clipboard"}
    </button>
                <button onClick={startListening}>start listining</button>
                <button onClick={SpeechRecognition.stopListening}>stop listining</button>
                <button onClick={resetTranscript}>reset</button>
            </div>
        </div>
    )
}
export default App;