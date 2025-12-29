import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDistributeSpacingHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24h-3V0h3V24ZM5,0H2V24h3V0Zm12,4H7V20h10V4Zm-7,3h4v10h-4V7Z"/></svg>
);

FiBsDistributeSpacingHorizontal.displayName = 'FiBsDistributeSpacingHorizontal';
