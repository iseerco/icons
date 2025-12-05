import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltToLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,13H8v5L2.445,12.983c-.297-.262-.445-.623-.445-.983s.148-.721,.445-.983l5.555-5.017v5H24v2ZM0,3V21H2V3H0Z"/></svg>
);

ArrowAltToLeft.displayName = 'ArrowAltToLeft';
