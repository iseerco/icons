import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBookmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,24.173,12,13.463,1.5,24.173V3a3,3,0,0,1,3-3h15a3,3,0,0,1,3,3ZM12,9.178l7.5,7.649V3H4.5V16.827Z"/></svg>
);

FiBsBookmark.displayName = 'FiBsBookmark';
