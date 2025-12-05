import React from 'react';
import type { IconProps } from '../../types';

export const Receipt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,0H6A3,3,0,0,0,3,3V23.9l3.67-2.51,2.671,1.826,2.666-1.826,2.666,1.826,2.664-1.825L21,23.9V3A3,3,0,0,0,18,0ZM15,14H7V12h8Zm2-5H7V7H17Z"/></svg>
);

Receipt.displayName = 'Receipt';
