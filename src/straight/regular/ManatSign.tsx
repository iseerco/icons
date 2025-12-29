import React from 'react';
import type { IconProps } from '../../types';

export const ManatSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,13v11h-2V13c0-4.07-3.06-7.44-7-7.93V24h-2V5.07c-3.94,.49-7,3.86-7,7.93v11H2V13C2,7.82,5.95,3.55,11,3.05V0h2V3.05c5.05,.5,9,4.77,9,9.95Z"/></svg>
);

ManatSign.displayName = 'ManatSign';
