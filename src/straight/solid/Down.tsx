import React from 'react';
import type { IconProps } from '../../types';

export const Down: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24h0c-.8,0-1.56-.31-2.12-.88h0S.07,13,.07,13H7V0h10V13h6.95l-9.82,10.11c-.58,.58-1.33,.89-2.13,.89Z"/></svg>
);

Down.displayName = 'Down';
