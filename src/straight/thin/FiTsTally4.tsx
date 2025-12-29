import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTally4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m1,0h1v24h-1V0Zm21,0v24h1V0h-1Zm-7,24h1V0h-1v24Zm-7,0h1V0h-1v24Z"/></svg>
);

FiTsTally4.displayName = 'FiTsTally4';
