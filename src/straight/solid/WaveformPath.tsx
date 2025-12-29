import React from 'react';
import type { IconProps } from '../../types';

export const WaveformPath: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,17h-2V7h2v10ZM15,0h-2v24h2V0Zm8,4h-2v16h2V4Zm-12,0h-2v16h2V4Zm-4,3h-2v10h2V7Zm-4,2H1v6h2v-6Z"/></svg>
);

WaveformPath.displayName = 'WaveformPath';
