import React from 'react';
import type { IconProps } from '../../types';

export const CloudDrizzle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24a1,1,0,0,1-1-1V22a1,1,0,0,1,2,0v1A1,1,0,0,1,12,24ZM7,23V22a1,1,0,0,0-2,0v1a1,1,0,0,0,2,0ZM23.991,12.365A7.185,7.185,0,0,1,16.724,19H6.057c-5.44.244-7.827-4.843-4.622-8.179A2.1,2.1,0,0,0,2.1,9.012C.987.257,12.758-3.473,17.016,4.165a1.979,1.979,0,0,0,1.356.978A6.994,6.994,0,0,1,23.991,12.365ZM10,15a1,1,0,0,0-2,0v1a1,1,0,0,0,2,0Zm6,0a1,1,0,0,0-2,0v1a1,1,0,0,0,2,0Zm3,8V22a1,1,0,0,0-2,0v1a1,1,0,0,0,2,0Z"/></svg>
);

CloudDrizzle.displayName = 'CloudDrizzle';
