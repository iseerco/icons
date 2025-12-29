import React from 'react';
import type { IconProps } from '../../types';

export const ListDropdown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,10v14H24V10H0Zm19,10H5v-2h14v2Zm0-4H5v-2h14v2ZM21,0H3C1.35,0,0,1.35,0,3v5H24V3c0-1.65-1.35-3-3-3Zm-3.76,5.71c-.39,.39-1.01,.39-1.4,0l-2.76-2.71h6.91l-2.76,2.71Z"/></svg>
);

ListDropdown.displayName = 'ListDropdown';
