import React from 'react';
import type { IconProps } from '../../types';

export const H4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,5v14c0,.553-.447,1-1,1s-1-.447-1-1v-6H2v6c0,.553-.447,1-1,1s-1-.447-1-1V5c0-.553.447-1,1-1s1,.447,1,1v6h8v-6c0-.553.447-1,1-1s1,.447,1,1Zm11-1c-.553,0-1,.447-1,1v7h-4.333c-.919,0-1.667-.748-1.667-1.667v-5.333c0-.553-.447-1-1-1s-1,.447-1,1v5.333c0,2.022,1.645,3.667,3.667,3.667h4.333v5c0,.553.447,1,1,1s1-.447,1-1V5c0-.553-.447-1-1-1Z"/></svg>
);

H4.displayName = 'H4';
