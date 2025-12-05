import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStepForward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,0v10.19L3,.063v23.874l15-10.127v10.19h3V0h-3ZM6,18.292V5.708l9.319,6.292-9.319,6.292Z"/></svg>
);

FiBsStepForward.displayName = 'FiBsStepForward';
