import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSauce: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,8.05V5H13.833L13,0H11l-.833,5H7V8.05A3.5,3.5,0,0,0,4,11.5V24H20V11.5A3.5,3.5,0,0,0,17,8.05ZM17,21H7V11.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5ZM8.974,14h6v4h-6Z"/></svg>
);

FiBsSauce.displayName = 'FiBsSauce';
