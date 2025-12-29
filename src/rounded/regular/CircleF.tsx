import React from 'react';
import type { IconProps } from '../../types';

export const CircleF: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12.039.019C5.422.019.039,5.402.039,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.039.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.039,2.019s10,4.486,10,10-4.486,10-10,10Zm5-15c0,.552-.448,1-1,1h-6c-.551,0-1,.449-1,1v3h5c.552,0,1,.448,1,1s-.448,1-1,1h-5v3c0,.553-.448,1-1,1s-1-.447-1-1v-8c0-1.654,1.346-3,3-3h6c.552,0,1,.448,1,1Z"/></svg>
);

CircleF.displayName = 'CircleF';
