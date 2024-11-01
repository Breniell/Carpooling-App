import React, { useState } from 'react';
import { Send, Phone, VideoIcon } from 'lucide-react';
import type { Message, User } from '../types';

interface ChatProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  onSendMessage: (content: string) => void;
}

export default function Chat({ messages, currentUser, recipient, onSendMessage }: ChatProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={recipient.avatar}
            alt={recipient.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{recipient.name}</h3>
            <span className="text-sm text-green-500">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <VideoIcon size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isCurrentUser = message.sender.id === currentUser.id;
          return (
            <div
              key={message.id}
              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex items-end gap-2 max-w-[70%]">
                {!isCurrentUser && (
                  <img
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div
                  className={`p-3 rounded-lg ${
                    isCurrentUser
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{message.content}</p>
                  <span
                    className={`text-xs ${
                      isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}