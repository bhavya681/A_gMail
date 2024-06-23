import { useState, useEffect } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US"; // Language setting

const VoiceCommands = () => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  useEffect(() => {
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      // Handle recognized command
      handleVoiceCommand(command);
      stopListening();
    };

    recognition.onend = () => {
      if (listening) {
        startListening();
      }
    };

    return () => {
      recognition.stop();
    };
  }, [listening]);

  const handleVoiceCommand = (command) => {
    switch (command) {
      case 'inbox':
        // Navigate to inbox
        history.push('/');
        break;
      case 'starred':
        // Navigate to starred
        history.push('/starred');
        break;
      case 'snoozed':
        // Navigate to snoozed
        history.push('/snoozed');
        break;
      case 'sent':
        // Navigate to sent
        history.push('/sent');
        break;
      case 'drafts':
        // Navigate to drafts
        history.push('/drafts');
        break;
      default:
        console.log('Command not recognized:', command);
        break;
    }
  };
  

  const simulateReadEmails = () => {
    // Simulate reading emails (replace with actual logic)
    console.log("Simulating reading emails...");
  };

  const simulateComposeEmail = () => {
    // Simulate composing a new email (replace with actual logic)
    console.log("Simulating composing new email...");
  };

  return (
    <div className="flex justify-center items-center m-1 gap-3">
      <button onClick={startListening}><CiMicrophoneOn size={"26px"}/></button>
      <button onClick={stopListening}><CiMicrophoneOff size={"26px"}/></button>
    </div>
  );
};

export default VoiceCommands;
