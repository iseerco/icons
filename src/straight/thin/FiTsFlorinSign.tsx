import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFlorinSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.12,1.93l-3.89,8.57h5.77v1h-6.22l-4.99,10.98c-.42,.92-1.35,1.52-2.36,1.52H0v-1H5.43c.62,0,1.19-.37,1.45-.93l4.8-10.57H6v-1h6.13L16.21,1.52c.42-.92,1.35-1.52,2.36-1.52h5.43V1h-5.43c-.62,0-1.19,.37-1.45,.93Z"/></svg>
);

FiTsFlorinSign.displayName = 'FiTsFlorinSign';
