import React from 'react';
import type { IconProps } from '../../types';

export const MehBlank: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.894,24,0A12.013,12.013,0,0,0,12,0ZM8.5,11a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,8.5,11Zm7,0a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,15.5,11Z"/></svg>
);

MehBlank.displayName = 'MehBlank';
