import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/ChatGPTButton.css';

const ChatGPTButton = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (showChat) {
      inputRef.current.focus();
    }
  }, [showChat]);

  const handleClick = () => {
    setShowChat(true);
  };

  const handleClose = () => {
    setShowChat(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    const userMessage = {
      text: inputValue,
      sender: 'user',
    };
    setInputValue('');
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: userMessage.text + '\nResponse:',
        max_tokens: 150,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      });
      const aiMessage = {
        text: response.data.choices[0].text.trim(),
        sender: 'ai',
      };
      setMessages(messages => [...messages, userMessage, aiMessage]);
      console.log(response); // add this line to log the response object
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <div className="chat-container">
      <button className="chat-button" onClick={handleClick}>
        <img src="/chat-icon.png" alt="Chat with ChatGPT" />
      </button>
      {showChat && (
        <div className="chat-popup">
          <div className="chat-header">
            <h2>Chat with ChatGPT</h2>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>
          <div className="chat-body">
            {messages.slice().reverse().map((message, index) => (
              <div key={index} className={`message message-${message.sender} ${message.sender === 'user' ? 'message-user' : 'message-ai'}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input type="text" ref={inputRef} value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Type your message here" />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatGPTButton;
