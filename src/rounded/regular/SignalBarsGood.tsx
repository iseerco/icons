import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsGood: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m14.5,5h-1c-1.378,0-2.5,1.121-2.5,2.5v3.55c-.162-.033-.329-.05-.5-.05h-1c-1.378,0-2.5,1.121-2.5,2.5v2.55c-.162-.033-.329-.05-.5-.05h-1c-1.378,0-2.5,1.121-2.5,2.5v3c0,1.379,1.122,2.5,2.5,2.5h9c1.378,0,2.5-1.121,2.5-2.5V7.5c0-1.379-1.122-2.5-2.5-2.5Zm-7.5,17h-1.5c-.276,0-.5-.225-.5-.5v-3c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v3.5Zm4,0h-2v-8.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v8.5Zm4-.5c0,.275-.224.5-.5.5h-1.5V7.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v14Z"/></svg>
);

SignalBarsGood.displayName = 'SignalBarsGood';
