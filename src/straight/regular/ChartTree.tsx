import React from 'react';
import type { IconProps } from '../../types';

export const ChartTree: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,16.127V15a3,3,0,0,0-3-3H13V9.9a5,5,0,1,0-2,0V12H6a3,3,0,0,0-3,3v1.127a4,4,0,1,0,2,0V15a1,1,0,0,1,1-1h5v2.127a4,4,0,1,0,2,0V14h5a1,1,0,0,1,1,1v1.127a4,4,0,1,0,2,0ZM9,5a3,3,0,1,1,3,3A3,3,0,0,1,9,5ZM6,20a2,2,0,1,1-2-2A2,2,0,0,1,6,20Zm8,0a2,2,0,1,1-2-2A2,2,0,0,1,14,20Zm6,2a2,2,0,1,1,2-2A2,2,0,0,1,20,22Z"/></svg>
);

ChartTree.displayName = 'ChartTree';
