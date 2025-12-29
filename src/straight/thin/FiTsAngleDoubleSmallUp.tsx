import React from 'react';
import type { IconProps } from '../../types';

export const FiTsAngleDoubleSmallUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.635,11.428l-5.281-5.281c-.189-.188-.518-.188-.707,0l-5.281,5.281-.707-.707,5.281-5.281c.566-.566,1.555-.566,2.121,0l5.281,5.281-.707,.707Zm.707,6.638l-5.87-5.869c-.25-.254-.694-.252-.942-.001l-5.871,5.871,.707,.707,5.635-5.634,5.635,5.634,.707-.707Z"/></svg>
);

FiTsAngleDoubleSmallUp.displayName = 'FiTsAngleDoubleSmallUp';
