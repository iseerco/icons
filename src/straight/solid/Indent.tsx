import React from 'react';
import type { IconProps } from '../../types';

export const Indent: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_06_align_left" data-name="06 align left"><rect y="4" width={size} height={size}/><rect x="8" y="9" width={size} height={size}/><rect y="19" width={size} height={size}/><rect x="8" y="14" width={size} height={size}/><path d="M0,8v9l4.174-3.757a1,1,0,0,0,0-1.486Z"/></g></svg>
);

Indent.displayName = 'Indent';
