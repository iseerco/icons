import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowTurnDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,2V12.5c0,.83-.67,1.5-1.5,1.5H1.24L7.37,7.34l-.74-.68L.47,13.37c-.62,.62-.62,1.64-.01,2.25l6.18,6.72,.74-.68L1.24,15H21.5c1.38,0,2.5-1.12,2.5-2.5V2h-1Z"/></svg>
);

FiTsArrowTurnDownLeft.displayName = 'FiTsArrowTurnDownLeft';
