import React from 'react';
import type { IconProps } from '../../types';

export const TimeOclock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 14a1.994 1.994 0 0 1 -1-3.723v-5.277h2v5.277a1.994 1.994 0 0 1 -1 3.723z"/></svg>
);

TimeOclock.displayName = 'TimeOclock';
