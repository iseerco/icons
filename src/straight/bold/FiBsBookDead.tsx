import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBookDead: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,0H5C2.794,0,1,1.794,1,4v16c0,2.206,1.794,4,4,4h18V2.5c0-1.378-1.121-2.5-2.5-2.5ZM5,3h15v13H5c-.345,0-.68.044-1,.127V4c0-.551.448-1,1-1Zm0,18c-.552,0-1-.449-1-1s.448-1,1-1h15v2H5Zm5-7h4v-2h2v-3c0-2.206-1.794-4-4-4s-4,1.794-4,4v3h2v2Zm3-6h2v2h-2v-2Zm-4,2v-2h2v2h-2Z"/></svg>
);

FiBsBookDead.displayName = 'FiBsBookDead';
