import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0V24h-2V0h2ZM2,24h2V0H2V24ZM7,4h10V20H7V4Z"/></svg>
);

DistributeSpacingHorizontal.displayName = 'DistributeSpacingHorizontal';
