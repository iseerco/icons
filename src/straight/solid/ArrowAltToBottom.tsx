import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,22c-.36,0-.721-.148-.983-.445l-5.017-5.555h5V0h2V16h5l-5.017,5.555c-.262,.297-.623,.445-.983,.445Zm-9,0v2H21v-2H3Z"/></svg>
);

ArrowAltToBottom.displayName = 'ArrowAltToBottom';
