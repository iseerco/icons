import React from 'react';
import type { IconProps } from '../../types';

export const FiTrTableRows: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,4.5v4.5H6V3h13.5c1.93,0,3.5,1.57,3.5,3.5ZM1,17.5V6.5c0-1.93,1.57-3.5,3.5-3.5h.5V21h-.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H6V12H23v5.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>
);

FiTrTableRows.displayName = 'FiTrTableRows';
