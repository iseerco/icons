import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSidebarFlip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,2.038H5.5C2.467,2.038,0,4.506,0,7.538v9c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V7.538c0-3.032-2.467-5.5-5.5-5.5Zm-3.5,17H5.5c-1.378,0-2.5-1.121-2.5-2.5V7.538c0-1.379,1.122-2.5,2.5-2.5H15v14Zm4.5-6.038c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5,1.5,.672,1.5,1.5-.671,1.5-1.5,1.5Zm0-5c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5,1.5,.672,1.5,1.5-.671,1.5-1.5,1.5Z"/></svg>
);

FiBrSidebarFlip.displayName = 'FiBrSidebarFlip';
