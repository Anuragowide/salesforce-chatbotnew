'use client'

import React, { useState } from 'react'
import { Send, MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your Salesforce AI Assistant. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!inputText.trim()) return

    // Add user message
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: inputText,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMsg])
    setInputText('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        'I\'ve processed your request. What else can I help with?',
        'Got it! Let me check that for you.',
        'That sounds good. Anything else?'
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date()
      }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="absolute bottom-24 right-0 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h3 className="font-bold">Salesforce Chat</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="hover:bg-blue-500 p-1 rounded transition-colors"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-500 p-1 rounded transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Minimized State */}
      {isOpen && isMinimized && (
        <div className="absolute bottom-24 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 mb-2">
          <button
            onClick={() => setIsMinimized(false)}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-semibold text-sm"
          >
            <Maximize2 size={16} />
            Salesforce Chat
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-2xl text-white border-2 border-blue-500"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
