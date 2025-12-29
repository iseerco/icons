import React from 'react';
import type { IconProps } from '../../types';

export const List: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_05_list" data-name="05 list"><rect x="7" y="4" width={size} height={size}/><rect x="7" y="11" width={size} height={size}/><rect x="7" y="18" width={size} height={size}/><circle cx="2" cy="5" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="2" cy="19" r="2"/></g></svg>
);

List.displayName = 'List';
