import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSortShapesDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,1H14V10h9V1Zm-1,8h-7V2h7v7Zm-3.48,4.71l-5.12,9.29h10.19l-5.07-9.29Zm0,2.08l3.39,6.21h-6.81l3.42-6.21Zm-8.23,2.62l.71,.71-4.44,4.44c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44L.01,19.13l.71-.71,4.28,4.28V0h1V22.71l4.29-4.29Z"/></svg>
);

FiTsSortShapesDown.displayName = 'FiTsSortShapesDown';
