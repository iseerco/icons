import React from 'react';
import type { IconProps } from '../../types';

export const FiBrU: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-5.514,0-10-4.486-10-10V1.5c.034-1.972,2.967-1.971,3,0V14c.296,9.253,13.708,9.247,14,0V1.5c.034-1.972,2.967-1.971,3,0V14c0,5.514-4.486,10-10,10Z"/></svg>
);

FiBrU.displayName = 'FiBrU';
