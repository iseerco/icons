import React from 'react';
import type { IconProps } from '../../types';

export const FiBrI: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.5,21h-4V3h4c1.972-.034,1.971-2.967,0-3H6.5c-1.972,.034-1.971,2.967,0,3h4V21H6.5c-1.972,.034-1.971,2.967,0,3h11c1.972-.034,1.971-2.967,0-3Z"/></svg>
);

FiBrI.displayName = 'FiBrI';
