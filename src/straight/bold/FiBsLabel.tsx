import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLabel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0,2,5.615V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5.615ZM5,21V7.371l7-3.93,7,3.93L19,21Z"/><circle cx="12" cy="9" r="1.5"/></svg>
);

FiBsLabel.displayName = 'FiBsLabel';
