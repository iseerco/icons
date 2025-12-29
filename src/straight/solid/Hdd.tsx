import React from 'react';
import type { IconProps } from '../../types';

export const Hdd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1,15V3C1,1.35,2.35,0,4,0H20c1.65,0,3,1.35,3,3V15H1Zm22,2v7H1v-7H23Zm-6,3.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm4,0c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Z"/></svg>
);

Hdd.displayName = 'Hdd';
