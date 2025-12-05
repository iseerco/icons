import React from 'react';
import type { IconProps } from '../../types';

export const Pause: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M10,24H3V0h7ZM5,22H8V2H5Z"/><path d="M21,24H14V0h7Zm-5-2h3V2H16Z"/></g></svg>
);

Pause.displayName = 'Pause';
