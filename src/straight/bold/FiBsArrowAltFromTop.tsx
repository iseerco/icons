import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3V0H3V3h7.5v15H6l5.017,5.555c.525,.593,1.442,.593,1.966,0l5.017-5.555h-4.5V3h7.5Z"/></svg>
);

FiBsArrowAltFromTop.displayName = 'FiBsArrowAltFromTop';
