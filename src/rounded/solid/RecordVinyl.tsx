import React from 'react';
import type { IconProps } from '../../types';

export const RecordVinyl: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm1-4a1,1,0,1,1-1-1A1,1,0,0,1,13,12Z"/></svg>
);

RecordVinyl.displayName = 'RecordVinyl';
