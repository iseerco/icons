import React from 'react';
import type { IconProps } from '../../types';

export const Meh: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,10a2,2,0,0,1,4,0v1H6Zm10,7H8V15h8Zm-2-6V10a2,2,0,0,1,4,0v1Z"/></svg>
);

Meh.displayName = 'Meh';
