import React from 'react';
import type { IconProps } from '../../types';

export const PlayPause: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,21h-2V3h2V21Zm-4,0h-2V3h2V21Zm-16-.002V3.002l10.88,6.946c.699,.439,1.12,1.203,1.12,2.039s-.424,1.601-1.135,2.047L2,20.998Z"/></svg>
);

PlayPause.displayName = 'PlayPause';
