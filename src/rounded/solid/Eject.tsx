import React from 'react';
import type { IconProps } from '../../types';

export const Eject: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23,22H1c-.552,0-1-.448-1-1s.448-1,1-1h22c.552,0,1,.448,1,1s-.448,1-1,1Zm.56-6.191c.695-1.374.567-2.933-.401-4.245L15.195,2.595c-.761-1.014-1.923-1.595-3.195-1.595-1.289,0-2.464.596-3.166,1.562L.775,11.636C.263,12.334-.008,13.148-.008,13.991c0,.629.148,1.241.44,1.818.695,1.372,2.029,2.191,3.567,2.191h15.993c1.538,0,2.872-.819,3.567-2.191Z"/></svg>
);

Eject.displayName = 'Eject';
