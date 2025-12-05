import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSignalBarsGood: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m14.5,4h-1c-1.93,0-3.5,1.57-3.5,3.5v1.551c-.165-.024-.329-.051-.5-.051h-1c-1.93,0-3.5,1.57-3.5,3.5v1.551c-.165-.024-.329-.051-.5-.051h-1c-1.93,0-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V7.5c0-1.93-1.57-3.5-3.5-3.5ZM3,20.5v-3c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v3.5h-1.5c-.276,0-.5-.225-.5-.5Zm5-8c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v8.5h-2v-8.5Zm7,8c0,.275-.224.5-.5.5h-1.5V7.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v13Z"/></svg>
);

FiBrSignalBarsGood.displayName = 'FiBrSignalBarsGood';
