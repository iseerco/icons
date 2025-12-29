import React from 'react';
import type { IconProps } from '../../types';

export const WindowFrameOpen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m11,11H2V3c0-1.654,1.346-3,3-3h6v11ZM19,0h-6v11h9V3c0-1.654-1.346-3-3-3Zm5,22v2H0v-2h2v-9h20v9h2Z"/>
</svg>
);

WindowFrameOpen.displayName = 'WindowFrameOpen';
