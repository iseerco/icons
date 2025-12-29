import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowToLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,11.5H2.207L7.854,5.854l-.707-.707L1,11.293V5H0v14H1v-6.293l6.146,6.146,.707-.707L2.207,12.5H24v-1Z"/></svg>
);

FiTsArrowToLeft.displayName = 'FiTsArrowToLeft';
