import React from 'react';
import type { IconProps } from '../../types';

export const FiTrTextShadow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,1.5c0,.28-.22,.5-.5,.5h-7.5v15.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V2H1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H17.5c.28,0,.5,.22,.5,.5Zm-5,3.5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm0,4c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm0,4c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm0,4c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm0,4c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM17,5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm4,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/></svg>
);

FiTrTextShadow.displayName = 'FiTrTextShadow';
