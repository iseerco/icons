import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSubtitles: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2H3A3,3,0,0,0,0,5V22H24V5A3,3,0,0,0,21,2Zm0,17H3V5H21Z"/><rect x="10" y="9" width={size} height={size}/><rect x="5" y="9" width={size} height={size}/><rect x="5" y="14" width={size} height={size}/><rect x="16" y="14" width={size} height={size}/></svg>
);

FiBsSubtitles.displayName = 'FiBsSubtitles';
