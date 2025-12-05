import React from 'react';
import type { IconProps } from '../../types';

export const PeoplePants: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2.5,2.5C2.5,1.12,3.62,0,5,0s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm7.5,6.5v8h-2v7h-2v-7h-2v7H2v-7H0V9c0-1.65,1.35-3,3-3H7c1.65,0,3,1.35,3,3Zm9-4c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm5,12h-2v7h-2v-7h-2v7h-2v-7h-2V9c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3v8Z"/></svg>
);

PeoplePants.displayName = 'PeoplePants';
