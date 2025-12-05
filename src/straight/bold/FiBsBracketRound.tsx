import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBracketRound: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.34,21.66l-1.92,2.31c-.22-.18-5.43-4.58-5.43-11.96S13.21,.22,13.43,.04l1.91,2.31s-4.34,3.71-4.34,9.65,4.3,9.62,4.34,9.66Z"/></svg>
);

FiBsBracketRound.displayName = 'FiBsBracketRound';
