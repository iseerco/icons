import React from 'react';
import type { IconProps } from '../../types';

export const TurnRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m23.384,10.486l-6.675,6.719-1.419-1.41,5.758-5.795H3c-.551,0-1,.449-1,1v11H0v-11c0-1.654,1.346-3,3-3h18.048l-5.758-5.795,1.419-1.409,6.677,6.721c.817.817.817,2.151-.002,2.97Z"/>
</svg>
);

TurnRight.displayName = 'TurnRight';
