'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, Send } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'שלום! 👋 אני ערדית ממולטיבראון',
    },
    {
      type: 'bot',
      text: 'אשמח לעזור לכם למצוא את המקום המושלם. במה אוכל לעזור?',
    },
  ])
  const [input, setInput] = useState('')

  const quickReplies = [
    'מחפש וילה לשבת חתן',
    'צימר רומנטי זוגי',
    'מתחם לאירוע',
    'מעוניין בפרטים נוספים',
  ]

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: 'user', text: reply }])
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'מעולה! אשמח לשמוע עוד פרטים. כמה אנשים? לאיזה תאריכים? איזה אזור מעדיפים?',
      }])
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: 'או שאפשר פשוט להתקשר אליי עכשיו: 050-123-4567 📞',
        }])
      }, 1000)
    }, 800)
  }

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { type: 'user', text: input }])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'תודה על הפניה! אני מעבירה את הפרטים לערדית והיא תחזור אליך תוך שעה. במקביל, אפשר גם להתקשר ישירות: 050-123-4567',
      }])
    }, 1000)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-accent-pink rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        aria-label="פתח צ'אט"
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <>
            <MessageCircle size={28} className="text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-cyan rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
              1
            </span>
          </>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-pink to-accent-cyan p-4 flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762012646/Ardit_znq9aj.jpg"
              alt="ערדית בראון"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <div className="flex-1">
              <h4 className="font-bold text-white">ערדית בראון</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/90">זמינה עכשיו</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/50 to-white/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-accent-pink text-white rounded-br-none'
                      : 'bg-white/80 text-text-dark rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length === 2 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-text-grey text-center mb-3">בחרו אפשרות או כתבו בעצמכם:</p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full p-3 bg-white/60 hover:bg-accent-pink hover:text-white text-text-dark text-sm rounded-lg border border-white/40 transition-all duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-white/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="כתבו את ההודעה שלכם..."
                className="flex-1 px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink text-text-dark placeholder-text-grey"
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 bg-accent-pink text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
