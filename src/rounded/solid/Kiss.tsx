import React from 'react';
import type { IconProps } from '../../types';

export const Kiss: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM8.5,11a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,8.5,11Zm4,9H10.769a1,1,0,0,1,0-2H12.5a.5.5,0,0,0,0-1H12a1,1,0,0,1,0-2h.5a.5.5,0,0,0,0-1H10.769a1,1,0,0,1,0-2H12.5a2.507,2.507,0,0,1,1.987,4A2.507,2.507,0,0,1,12.5,20Zm3-9a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,15.5,11Z"/></svg>
);

Kiss.displayName = 'Kiss';
