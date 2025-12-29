import React from 'react';
import type { IconProps } from '../../types';

export const Joystick: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,17h-1.5v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-4V7.873c1.724-.445,3-2.013,3-3.873,0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.276,3.428,3,3.873v9.127H3.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5ZM10,4c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm10.5,18H3.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h17c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5Z"/></svg>
);

Joystick.displayName = 'Joystick';
