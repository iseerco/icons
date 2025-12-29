import React from 'react';
import type { IconProps } from '../../types';

export const BlockBrick: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6,17H0v-4H6v4ZM8,0V5h8V0H8ZM0,11H11V7H0v4Zm16,2H8v4h8v-4Zm-3-6v4h11V7H13Zm5-2h6c0-2.757-2.243-5-5-5h-1V5Zm-5,19h6c2.757,0,5-2.243,5-5H13v5Zm-2-5H0c0,2.757,2.243,5,5,5h6v-5ZM6,0h-1C2.243,0,0,2.243,0,5H6V0ZM24,13h-6v4h6v-4Z"/></svg>
);

BlockBrick.displayName = 'BlockBrick';
