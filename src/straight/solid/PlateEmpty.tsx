import React from 'react';
import type { IconProps } from '../../types';

export const PlateEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M23.958,8.485c-.778,4.602-3.867,8.689-7.733,10.515H7.775C3.909,17.175,.82,13.087,.042,8.485c-.343-1.766,1.173-3.53,2.967-3.485H20.991c1.794-.045,3.31,1.719,2.967,3.485Z"/>
</svg>
);

PlateEmpty.displayName = 'PlateEmpty';
