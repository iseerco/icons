import React from 'react';
import type { IconProps } from '../../types';

export const InputPipe: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,3H3c-1.654,0-3,1.346-3,3v15h24V6c0-1.654-1.346-3-3-3Zm-14,14h-2V7h2v10Z"/></svg>
);

InputPipe.displayName = 'InputPipe';
