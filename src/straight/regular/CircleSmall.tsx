import React from 'react';
import type { IconProps } from '../../types';

export const CircleSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M12,19a7,7,0,1,1,7-7A7.008,7.008,0,0,1,12,19ZM12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Z"/></g></svg>
);

CircleSmall.displayName = 'CircleSmall';
