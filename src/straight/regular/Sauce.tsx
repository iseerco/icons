import React from 'react';
import type { IconProps } from '../../types';

export const Sauce: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,9V5H13.833L13,0H11l-.833,5H7V9a3,3,0,0,0-3,3V24H20V12A3,3,0,0,0,17,9ZM9,7h6V9H9Zm9,15H6V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1ZM7.974,20h8V14h-8Zm2-4h4v2h-4Z"/></svg>
);

Sauce.displayName = 'Sauce';
