import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTransporter7: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m4,21h16v3H4v-3ZM7,3.5l-2.333-1.167L3.5,0l-1.167,2.333L0,3.5l2.333,1.167,1.167,2.333,1.167-2.333,2.333-1.167Zm14.5,11l-1-2.5-1,2.5-2.5,1,2.5,1,1,2.5,1-2.5,2.5-1-2.5-1Z"/></svg>
);

FiBsTransporter7.displayName = 'FiBsTransporter7';
