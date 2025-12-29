import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSort: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.383,10H1.617L9.929.918A2.8,2.8,0,0,1,14.082.93ZM8.43,7h7.14L12,3.1Zm3.428-4.057h0Zm.294-.011,0,0ZM12,24a2.8,2.8,0,0,1-2.082-.93L1.617,14H22.383l-8.312,9.082A2.788,2.788,0,0,1,12,24Zm-.149-2.935,0,0Zm.29-.009h0ZM8.43,17,12,20.9,15.57,17Z"/></svg>
);

FiBsSort.displayName = 'FiBsSort';
