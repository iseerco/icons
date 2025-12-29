import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTheta: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C7.038,0,3,5.383,3,12s4.038,12,9,12,9-5.383,9-12S16.962,0,12,0Zm0,3c2.913,0,5.42,3.306,5.912,7.5H6.088c.492-4.194,3-7.5,5.912-7.5Zm0,18c-2.913,0-5.42-3.306-5.912-7.5h11.824c-.492,4.194-3,7.5-5.912,7.5Z"/></svg>
);

FiBrTheta.displayName = 'FiBrTheta';
