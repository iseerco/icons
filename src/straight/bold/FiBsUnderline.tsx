import React from 'react';
import type { IconProps } from '../../types';

export const FiBsUnderline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,18.5a9.011,9.011,0,0,0,9-9V0H18V9.5a6,6,0,0,1-12,0V0H3V9.5A9.011,9.011,0,0,0,12,18.5Z"/><rect y="21" width={size} height={size}/></svg>
);

FiBsUnderline.displayName = 'FiBsUnderline';
