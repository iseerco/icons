import React from 'react';
import type { IconProps } from '../../types';

export const Meh: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm4,13H8v2h8ZM6,10v1h4V10a2,2,0,0,0-4,0Zm8,0v1h4V10a2,2,0,0,0-4,0Z"/></svg>
);

Meh.displayName = 'Meh';
