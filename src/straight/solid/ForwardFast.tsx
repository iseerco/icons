import React from 'react';
import type { IconProps } from '../../types';

export const ForwardFast: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <polygon points="22 0 22 9.293 9.001 .098 9 7 0 .057 0 23.944 9 17 9.001 23.903 22 14.707 22 24 24 24 24 0 22 0"/>
</svg>
);

ForwardFast.displayName = 'ForwardFast';
