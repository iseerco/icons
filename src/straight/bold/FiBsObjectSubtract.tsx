import React from 'react';
import type { IconProps } from '../../types';

export const FiBsObjectSubtract: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5,17H0v-5H3v2h2v3Zm5-3h-3v3h3v-3Zm7-2h-3v2h-2v3h5v-5Zm0-5h-3v3h3v-3Zm0-3.5c0-1.93-1.57-3.5-3.5-3.5h-1.5V3h1.5c.28,0,.5,.22,.5,.5v1.5h3v-1.5ZM10,0h-3V3h3V0ZM3,3.5c0-.28,.22-.5,.5-.5h1.5V0h-1.5C1.57,0,0,1.57,0,3.5v1.5H3v-1.5Zm0,3.5H0v3H3v-3Zm21,3.5c0-1.93-1.57-3.5-3.5-3.5h-1.5v3h1.5c.28,0,.5,.22,.5,.5v10.5H10v-2h-3v5H24V10.5Z"/></svg>
);

FiBsObjectSubtract.displayName = 'FiBsObjectSubtract';
