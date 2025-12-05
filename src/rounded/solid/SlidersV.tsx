import React from 'react';
import type { IconProps } from '../../types';

export const SlidersV: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,4.146V1c0-.553-.447-1-1-1s-1,.447-1,1v3.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v12.146c0,.553.447,1,1,1s1-.447,1-1v-12.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm8,9V1c0-.553-.447-1-1-1s-1,.447-1,1v12.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v3.146c0,.553.447,1,1,1s1-.447,1-1v-3.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm10.5-5.646c0-1.582-1.056-2.923-2.5-3.354V1c0-.553-.447-1-1-1s-1,.447-1,1v3.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v12.146c0,.553.447,1,1,1s1-.447,1-1v-12.146c1.444-.431,2.5-1.772,2.5-3.354Z"/></svg>
);

SlidersV.displayName = 'SlidersV';
