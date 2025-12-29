import React from 'react';
import type { IconProps } from '../../types';

export const PesetaSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,7h-2.06c-.49-3.94-3.87-7-7.94-7h-3c-2.76,0-5,2.24-5,5v2H2c-.55,0-1,.45-1,1s.45,1,1,1h2v14c0,.55,.45,1,1,1s1-.45,1-1v-7h6c4.07,0,7.44-3.06,7.94-7h2.06c.55,0,1-.45,1-1s-.45-1-1-1ZM6,5c0-1.65,1.35-3,3-3h3c2.97,0,5.44,2.17,5.92,5H6v-2Zm6,9H6v-5h11.92c-.48,2.83-2.95,5-5.92,5Z"/></svg>
);

PesetaSign.displayName = 'PesetaSign';
