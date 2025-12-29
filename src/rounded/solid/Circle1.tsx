import React from 'react';
import type { IconProps } from '../../types';

export const Circle1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,17c0,.553-.448,1-1,1s-1-.447-1-1v-7.586l-.737,.737c-.391,.391-1.023,.391-1.414,0s-.391-1.023,0-1.414l2.444-2.444c.285-.286,.714-.374,1.09-.217,.374,.154,.617,.52,.617,.924v10Z"/></svg>
);

Circle1.displayName = 'Circle1';
