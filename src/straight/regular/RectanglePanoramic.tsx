import React from 'react';
import type { IconProps } from '../../types';

export const RectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,19H0V5H24ZM2,17H22V7H2Z"/></g></svg>
);

RectanglePanoramic.displayName = 'RectanglePanoramic';
