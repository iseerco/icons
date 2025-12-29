import React from 'react';
import type { IconProps } from '../../types';

export const FiTsEgg: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-5.514,0-10-4.486-10-10S6.479,0,12,0s10,8.472,10,14-4.486,10-10,10ZM12,1C7.119,1,3,8.985,3,14c0,4.962,4.037,9,9,9s9-4.038,9-9c0-5.015-4.119-13-9-13Zm3,10c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-2-4c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Z"/></svg>
);

FiTsEgg.displayName = 'FiTsEgg';
