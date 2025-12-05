import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTurnLeftDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m11,3.5v15.847l4.443-4.412,2.114,2.129-6.221,6.177c-.487.487-1.141.759-1.836.759s-1.349-.271-1.84-.763l-6.217-6.173,2.114-2.129,4.443,4.412V3.5c0-1.93,1.57-3.5,3.5-3.5h10.5v3h-10.5c-.276,0-.5.224-.5.5Z"/>
</svg>
);

FiBsTurnLeftDown.displayName = 'FiBsTurnLeftDown';
