import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSortSizeUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,23h8V15h-8v8Zm1-7h6v6h-6v-6ZM14,1V11h10V1H14Zm9,9H15V2h8V10ZM6.56,.44l4.44,4.44-.71,.71L6,1.29V24h-1V1.29L.72,5.57,.01,4.87,4.44,.44c.58-.58,1.54-.58,2.12,0Z"/></svg>
);

FiTsSortSizeUp.displayName = 'FiTsSortSizeUp';
