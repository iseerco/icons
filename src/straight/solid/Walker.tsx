import React from 'react';
import type { IconProps } from '../../types';

export const Walker: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,18.184V3c0-1.654-1.346-3-3-3h-8.585c-1.27,0-2.406.805-2.829,2.001L.057,23.327l1.887.666,4.587-12.993h13.47v7.184c-1.161.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816ZM7.236,9l2.236-6.333c.141-.399.52-.667.942-.667h8.585c.552,0,1,.448,1,1v6H7.236Z"/></svg>
);

Walker.displayName = 'Walker';
