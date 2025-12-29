import React from 'react';
import type { IconProps } from '../../types';

export const FiBrStopCircle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm4-11v4c0,1.105-.895,2-2,2h-4c-1.105,0-2-.895-2-2v-4c0-1.105.895-2,2-2h4c1.105,0,2,.895,2,2Z"/></svg>
);

FiBrStopCircle.displayName = 'FiBrStopCircle';
