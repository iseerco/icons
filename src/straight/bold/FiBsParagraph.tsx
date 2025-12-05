import React from 'react';
import type { IconProps } from '../../types';

export const FiBsParagraph: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,0h-15.5C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h4.5v7h3V3h2v21h3V3h3V0Zm-11,14h-4.5c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5h4.5v11Z"/></svg>
);

FiBsParagraph.displayName = 'FiBsParagraph';
