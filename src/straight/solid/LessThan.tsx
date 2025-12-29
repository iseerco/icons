import React from 'react';
import type { IconProps } from '../../types';

export const LessThan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <polygon points="0 12 24 0 24 2.248 4.472 12 24 21.858 24 24 0 12"/>
</svg>
);

LessThan.displayName = 'LessThan';
