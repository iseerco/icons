import React from 'react';
import type { IconProps } from '../../types';

export const CaretLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.293,19.293,8,13a1,1,0,0,1,0-1.414l6.293-6.293v14"/></svg>
);

CaretLeft.displayName = 'CaretLeft';
