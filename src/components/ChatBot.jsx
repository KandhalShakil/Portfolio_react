import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import './ChatBot.css';

const ChatBot = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your AI assistant. Ask me anything about this portfolio or my projects!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: input,
          history: conversationHistory
        })
      });

      if (!response.ok) {
        let backendError = 'API request failed';
        try {
          const errorPayload = await response.json();
          backendError = errorPayload?.error || backendError;
        } catch {
          // Ignore JSON parse error and keep generic fallback
        }
        throw new Error(backendError);
      }

      const data = await response.json();
      const botMessage = {
        id: messages.length + 2,
        text: data.reply || 'No response received.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: `Sorry, I encountered an error: ${error.message}`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <FaRobot className="bot-icon" />
                <h3>AI Assistant</h3>
              </div>
              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="message bot loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="message-content">
                    <span className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input-form" onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Ask me something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="chatbot-input"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="send-btn"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <BsChat />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default React.memo(ChatBot);
