import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSignHanging: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,1V0H2.5C1.122,0,0,1.122,0,2.5V24H1V2.5c0-.827,.673-1.5,1.5-1.5H7v3h-.5c-1.378,0-2.5,1.122-2.5,2.5v13.5H24V6.5c0-1.378-1.122-2.5-2.5-2.5h-.5V1h3Zm-1,5.5v12.5H5V6.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5Zm-3-2.5H8V1h12v3Z"/></svg>
);

FiTsSignHanging.displayName = 'FiTsSignHanging';
