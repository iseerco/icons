import React from 'react';
import type { IconProps } from '../../types';

export const FiTsRectangleXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,2H2.5C1.121,2,0,3.121,0,4.5V22H24V4.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,19H1V4.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V21Zm-6.396-12.896l-3.896,3.896,3.896,3.896-.707,.707-3.896-3.896-3.896,3.896-.707-.707,3.896-3.896-3.896-3.896,.707-.707,3.896,3.896,3.896-3.896,.707,.707Z"/></svg>
);

FiTsRectangleXmark.displayName = 'FiTsRectangleXmark';
