import React from 'react';
import type { IconProps } from '../../types';

export const FiTsMug: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,8.5c0-1.378-1.121-2.5-2.5-2.5h-2.5V2h2V1H0v1H2V20.5c0,1.378,1.122,2.5,2.5,2.5h12c1.379,0,2.5-1.122,2.5-2.5v-4.5h5v-7.5Zm-7.5,13.5H4.5c-.827,0-1.5-.673-1.5-1.5V7h13v-1H3V2h15V20.5c0,.827-.673,1.5-1.5,1.5Zm6.5-7h-4V7h2.5c.827,0,1.5,.673,1.5,1.5v6.5Z"/></svg>
);

FiTsMug.displayName = 'FiTsMug';
