import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSortShapesUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,23h9V14H14v9Zm1-8h7v7h-7v-7ZM18.52,.71l-5.12,9.29h10.19L18.52,.71Zm0,2.08l3.39,6.21h-6.81l3.42-6.21ZM6.56,.44l4.44,4.44-.71,.71L6,1.29V24h-1V1.29L.72,5.57,.01,4.87,4.44,.44c.58-.58,1.54-.58,2.12,0Z"/></svg>
);

FiTsSortShapesUp.displayName = 'FiTsSortShapesUp';
