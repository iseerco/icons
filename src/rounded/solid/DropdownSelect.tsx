import React from 'react';
import type { IconProps } from '../../types';

export const DropdownSelect: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2.43,12.052l-3.509,3.509c-.586,.586-1.536,.586-2.121,0l-3.509-3.509c-.757-.757-.221-2.052,.85-2.052h7.44c1.071,0,1.607,1.294,.85,2.052Z"/>
</svg>
);

DropdownSelect.displayName = 'DropdownSelect';
