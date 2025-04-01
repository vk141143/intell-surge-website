
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, SendHorizontal, X, MinusSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

type Message = {
  content: string;
  isBot: boolean;
  timestamp: Date;
};

const botResponses = {
  greeting: "Hello! I'm IntellSurge Assistant. How can I help you today?",
  services: "IntellSurge Technologies offers innovative solutions including AI implementation, custom software development, data analytics, cloud migration, and digital transformation consulting. How can we assist with your specific needs?",
  pricing: "Our pricing varies based on project requirements. We offer flexible engagement models including fixed price, time & materials, and retainer options. Would you like to discuss your project for a personalized quote?",
  contact: "You can reach our team at contact@intellsurge.com or schedule a consultation through our website. Would you like me to arrange a call with one of our specialists?",
  default: "Thank you for your message. Our team will review your inquiry and get back to you soon. Is there anything specific I can help clarify in the meantime?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize with a welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          content: botResponses.greeting,
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content: message,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Show bot is typing
    setIsTyping(true);
    
    // Simulate processing time
    setTimeout(() => {
      let botReply = getBotResponse(message);
      
      setMessages(prev => [
        ...prev, 
        {
          content: botReply,
          isBot: true,
          timestamp: new Date()
        }
      ]);
      
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi') || lowercaseMessage.includes('hey')) {
      return botResponses.greeting;
    } else if (lowercaseMessage.includes('service') || lowercaseMessage.includes('offer') || lowercaseMessage.includes('do you provide')) {
      return botResponses.services;
    } else if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost') || lowercaseMessage.includes('how much')) {
      return botResponses.pricing;
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('email') || lowercaseMessage.includes('phone') || lowercaseMessage.includes('reach')) {
      return botResponses.contact;
    } else {
      return botResponses.default;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleChat}
          className="bg-intell-blue hover:bg-intell-darkBlue text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed z-50 bottom-20 right-6 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 w-80 sm:w-96 ${
            isMinimized ? 'h-14' : 'h-96'
          }`}
        >
          {/* Chat Header */}
          <div className="bg-intell-blue p-3 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle size={18} />
              <h3 className="font-medium">IntellSurge Assistant</h3>
            </div>
            <div className="flex space-x-1">
              <button 
                onClick={toggleChat} 
                className="hover:bg-intell-darkBlue rounded p-1 transition"
                aria-label="Minimize chat"
              >
                <MinusSquare size={16} />
              </button>
              <button 
                onClick={closeChat} 
                className="hover:bg-intell-darkBlue rounded p-1 transition"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.isBot 
                          ? 'bg-gray-200 text-gray-800' 
                          : 'bg-intell-blue text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '250ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '500ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={endOfMessagesRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="resize-none min-h-10 max-h-24"
                    rows={1}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={message.trim() === ''}
                    className="shrink-0"
                    aria-label="Send message"
                  >
                    <SendHorizontal size={18} />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
