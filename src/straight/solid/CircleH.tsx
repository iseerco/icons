import React from 'react';
import type { IconProps } from '../../types';

export const CircleH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,17.75h-2v-4.75h-6v4.75h-2V6.25h2v4.75h6v-4.75h2v11.5Z"/></svg>
);

CircleH.displayName = 'CircleH';
