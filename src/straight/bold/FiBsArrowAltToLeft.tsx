import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltToLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,13.5H9v4.5L3.445,12.983c-.297-.262-.445-.623-.445-.983s.148-.721,.445-.983l5.555-5.017v4.5h15v3ZM0,3V21H3V3H0Z"/></svg>
);

FiBsArrowAltToLeft.displayName = 'FiBsArrowAltToLeft';
