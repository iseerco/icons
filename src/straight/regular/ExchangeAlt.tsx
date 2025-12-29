import React from 'react';
import type { IconProps } from '../../types';

export const ExchangeAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,8H0V6H19V1.872l4.629,4.236a1.113,1.113,0,0,1,0,1.66L19,12ZM5,11.872.371,16.108a1.113,1.113,0,0,0,0,1.66L5,22V18H24V16H5Z"/></svg>
);

ExchangeAlt.displayName = 'ExchangeAlt';
