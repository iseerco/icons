import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDiceD4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.748,1.392a3.408,3.408,0,0,0-5.5,0L.021,15.218,12,24l12-8.78Zm5.16,13.1L13.5,19.183V4.919ZM10.5,4.923V19.179L4.109,14.5Z"/></svg>
);

FiBsDiceD4.displayName = 'FiBsDiceD4';
