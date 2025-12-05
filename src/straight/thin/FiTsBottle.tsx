import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.429,9.179l-3.429-1.371V1h1V0H8V1h1V7.662l-3.428,1.371c-.955,.382-1.572,1.293-1.572,2.321v12.646H20V11.5c0-1.028-.616-1.939-1.571-2.321Zm.571,13.821H5V11.354c0-.617,.37-1.164,.943-1.393l4.057-1.623V1h4v7.484l4.058,1.623c.572,.229,.942,.776,.942,1.393v11.5Zm-11-4h8v-5H8v5Zm1-4h6v3h-6v-3Z"/></svg>
);

FiTsBottle.displayName = 'FiTsBottle';
