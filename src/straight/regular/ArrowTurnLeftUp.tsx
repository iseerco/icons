import React from 'react';
import type { IconProps } from '../../types';

export const ArrowTurnLeftUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M22,22v2H11c-1.654,0-3-1.346-3-3V2.952L2.205,8.709l-1.409-1.419L7.516,.613c.817-.817,2.151-.817,2.97,.002l6.718,6.675-1.409,1.419L10,2.952V21c0,.551,.449,1,1,1h11Z"/>
</svg>
);

ArrowTurnLeftUp.displayName = 'ArrowTurnLeftUp';
