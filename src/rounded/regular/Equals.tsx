import React from 'react';
import type { IconProps } from '../../types';

export const Equals: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m0,8c0-.552.448-1,1-1h22c.552,0,1,.448,1,1s-.448,1-1,1H1c-.552,0-1-.448-1-1Zm23,7H1c-.552,0-1,.447-1,1s.448,1,1,1h22c.552,0,1-.447,1-1s-.448-1-1-1Z"/>
</svg>
);

Equals.displayName = 'Equals';
