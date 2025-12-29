import React from 'react';
import type { IconProps } from '../../types';

export const WindowFrame: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,22v2H0v-2h2v-9h9v9h2v-9h9v9h2Zm-2-19c0-1.654-1.346-3-3-3h-6v11h9V3ZM11,0h-6c-1.654,0-3,1.346-3,3v8h9V0Z"/>
</svg>
);

WindowFrame.displayName = 'WindowFrame';
