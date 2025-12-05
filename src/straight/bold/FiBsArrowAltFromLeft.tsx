import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltFromLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.555,11.083l-5.555-5.083v4.5H3V3H0V21H3v-7.5h15v4.659l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>
);

FiBsArrowAltFromLeft.displayName = 'FiBsArrowAltFromLeft';
