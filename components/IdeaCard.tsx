
import React from 'react';
import { Idea } from '../types';

interface IdeaCardProps {
  idea: Idea;
  isActive: boolean;
  onClick: () => void;
  onDelete: (e: React.MouseEvent) => void;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea, isActive, onClick, onDelete }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-4 mb-3 rounded-xl cursor-pointer transition-all border-l-4 ${
        isActive 
          ? 'bg-indigo-50 border-indigo-500 shadow-sm' 
          : 'bg-white border-transparent hover:bg-gray-50'
      }`}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className={`font-semibold text-sm truncate pr-6 ${isActive ? 'text-indigo-900' : 'text-gray-900'}`}>
          {idea.title || 'Sáng kiến không tên'}
        </h3>
        <button 
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-opacity"
        >
          <i className="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
        {idea.description || 'Chưa có mô tả chi tiết...'}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
          {idea.category}
        </span>
        <span className="text-[10px] text-gray-400">
          {new Date(idea.createdAt).toLocaleDateString('vi-VN')}
        </span>
      </div>
    </div>
  );
};
