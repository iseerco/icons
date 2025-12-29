import React from 'react';
import type { IconProps } from '../../types';

export const CircleQuartersAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm0,2c2.398,0,4.601.849,6.325,2.261l-6.325,6.325-6.325-6.325c1.725-1.412,3.928-2.261,6.325-2.261ZM2,12c0-2.398.849-4.601,2.261-6.325l6.325,6.325-6.325,6.325c-1.412-1.725-2.261-3.928-2.261-6.325Zm10,10c-2.398,0-4.601-.849-6.325-2.261l6.325-6.325,6.325,6.325c-1.725,1.412-3.928,2.261-6.325,2.261Zm7.739-3.675l-6.325-6.325,6.325-6.325c1.412,1.725,2.261,3.928,2.261,6.325s-.849,4.601-2.261,6.325Z"/></svg>
);

CircleQuartersAlt.displayName = 'CircleQuartersAlt';
