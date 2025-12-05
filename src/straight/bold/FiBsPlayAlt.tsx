import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPlayAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 24h-24v-20.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-21-3h18v-17.5a.507.507 0 0 0 -.5-.5h-17a.5.5 0 0 0 -.5.5zm5-14v10l9-5z"/></svg>
);

FiBsPlayAlt.displayName = 'FiBsPlayAlt';
