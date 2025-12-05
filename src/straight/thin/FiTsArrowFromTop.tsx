import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.02,1V0H5.019V1h6.5V22.707l-5.646-5.646-.707,.707,5.793,5.793c.276,.275,.642,.432,1.032,.439h.029c.401,0,.776-.155,1.061-.439l5.793-5.793-.707-.707-5.647,5.647V1h6.5Z"/></svg>
);

FiTsArrowFromTop.displayName = 'FiTsArrowFromTop';
