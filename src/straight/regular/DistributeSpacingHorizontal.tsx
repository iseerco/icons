import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24h-2V0h2V24ZM4,0H2V24h2V0Zm13,4H7V20h10V4Zm-8,2h6v12h-6V6Z"/></svg>
);

DistributeSpacingHorizontal.displayName = 'DistributeSpacingHorizontal';
