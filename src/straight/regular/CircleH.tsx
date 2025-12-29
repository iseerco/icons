import React from 'react';
import type { IconProps } from '../../types';

export const CircleH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,6.25h2v11.5h-2v-4.75h-6v4.75h-2V6.25h2v4.75h6v-4.75Zm9,5.75c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/></svg>
);

CircleH.displayName = 'CircleH';
