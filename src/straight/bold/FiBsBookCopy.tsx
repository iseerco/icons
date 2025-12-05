import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBookCopy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21.5,0h-9.5c-2.206,0-4,1.794-4,4v11c0,2.206,1.794,4,4,4h12V2.5c0-1.379-1.122-2.5-2.5-2.5Zm-9.5,3h9v8h-9c-.347,0-.678.058-1,.142v-7.142c0-.552.449-1,1-1Zm0,13c-.551,0-1-.448-1-1s.449-1,1-1h9v2h-9Zm-8,5h12v3H4c-2.206,0-4-1.794-4-4v-11c0-2.206,1.794-4,4-4h2v3h-2c-.551,0-1,.448-1,1v7.142c.322-.084.653-.142,1-.142h2.09c.193,1.142.708,2.173,1.45,3h-3.54c-.551,0-1,.448-1,1s.449,1,1,1Z"/></svg>
);

FiBsBookCopy.displayName = 'FiBsBookCopy';
