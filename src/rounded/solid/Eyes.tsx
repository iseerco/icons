import React from 'react';
import type { IconProps } from '../../types';

export const Eyes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5.5,0C2.462,0,0,5.373,0,12s2.462,12,5.5,12,5.5-5.373,5.5-12S8.538,0,5.5,0Zm-1,17c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5ZM18.5,0c-3.038,0-5.5,5.373-5.5,12s2.462,12,5.5,12,5.5-5.373,5.5-12S21.538,0,18.5,0Zm-1,17c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Z"/></svg>
);

Eyes.displayName = 'Eyes';
