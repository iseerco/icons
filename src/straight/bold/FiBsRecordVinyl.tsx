import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRecordVinyl: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Z"/><path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,6.5A1.5,1.5,0,1,1,13.5,12,1.5,1.5,0,0,1,12,13.5Z"/></svg>
);

FiBsRecordVinyl.displayName = 'FiBsRecordVinyl';
