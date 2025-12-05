import React from 'react';
import type { IconProps } from '../../types';

export const Pyramid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,2.01c.057,0,.065.017.077.044L20.925,22H3.075L11.919,2.062c.016-.035.024-.052.081-.052m0-2a2.061,2.061,0,0,0-1.9,1.233L0,24H24L13.905,1.243A2.061,2.061,0,0,0,12,.01Z"/></svg>
);

Pyramid.displayName = 'Pyramid';
