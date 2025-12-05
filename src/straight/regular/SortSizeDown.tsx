import React from 'react';
import type { IconProps } from '../../types';

export const SortSizeDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.5,17.5l1.41,1.41-4.5,4.5c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58L.09,18.91l1.41-1.41,3.5,3.5V0h2V21l3.5-3.5ZM24,1V11H14V1h10Zm-2,2h-6v6h6V3Zm-6,12h8v8h-8V15Zm2,6h4v-4h-4v4Z"/></svg>
);

SortSizeDown.displayName = 'SortSizeDown';
