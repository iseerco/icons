import React from 'react';
import type { IconProps } from '../../types';

export const Speaker: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,0H8A5.006,5.006,0,0,0,3,5V19a5.006,5.006,0,0,0,5,5h8a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,16,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"/><circle cx="12" cy="6" r="1.5"/><path d="M12,10a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,10Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,18Z"/><circle cx="12" cy="15" r="1"/></svg>
);

Speaker.displayName = 'Speaker';
