import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWaveformPath: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,7h3v10h-3V7Zm-5,17h3V0h-3v24ZM20,4v16h3V4h-3Zm-15,15h3V5h-3v14ZM0,15h3v-6H0v6Z"/></svg>
);

FiBsWaveformPath.displayName = 'FiBsWaveformPath';
