
import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAi = message.role === 'model';

  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-6`}>
      <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
        isAi 
          ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
          : 'bg-indigo-600 text-white rounded-tr-none'
      }`}>
        <div className="flex items-center mb-1 space-x-2">
          <i className={`fa-solid ${isAi ? 'fa-robot text-indigo-500' : 'fa-user text-indigo-200'} text-xs`}></i>
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            {isAi ? 'Trợ lý Sáng kiến' : 'Bạn'}
          </span>
        </div>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
        <div className={`text-[10px] mt-2 opacity-50 ${isAi ? 'text-gray-500' : 'text-white text-right'}`}>
          {new Date(message.timestamp).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
