import React from 'react';
import type { IconProps } from '../../types';

export const Keyboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,6H13V2H11V6H3A3,3,0,0,0,0,9V20H24V9A3,3,0,0,0,21,6ZM9,10h3v2H9ZM6,16H4V14H6Zm1-4H4V10H7Zm9,4H8V14h8Zm4,0H18V14h2Zm0-4H14V10h6Z"/></svg>
);

Keyboard.displayName = 'Keyboard';
