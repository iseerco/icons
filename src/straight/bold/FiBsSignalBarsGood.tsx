import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSignalBarsGood: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,4h-2c-1.654,0-3,1.346-3,3v2h-2c-1.654,0-3,1.346-3,3v2h-2c-1.654,0-3,1.346-3,3v7h18V7c0-1.654-1.346-3-3-3ZM5,21h-2v-4h2v4Zm5,0h-2v-9h2v9Zm5,0h-2V7h2v14Z"/></svg>
);

FiBsSignalBarsGood.displayName = 'FiBsSignalBarsGood';
