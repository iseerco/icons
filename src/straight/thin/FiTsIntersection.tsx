import React from 'react';
import type { IconProps } from '../../types';

export const FiTsIntersection: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,24h-1v-15c0-4.411-3.589-8-8-8S4,4.589,4,9v15h-1v-15C3,4.037,7.038,0,12,0s9,4.037,9,9v15Z"/>
</svg>
);

FiTsIntersection.displayName = 'FiTsIntersection';
