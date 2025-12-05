import React from 'react';
import type { IconProps } from '../../types';

export const FiBsColumns3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-6.5,3v14h-4V5h4Zm-11,.5c0-.276.224-.5.5-.5h3.5v14H3V5.5Zm18,13.5h-4V5h3.5c.276,0,.5.224.5.5v13.5Z"/></svg>
);

FiBsColumns3.displayName = 'FiBsColumns3';
