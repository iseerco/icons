import React from 'react';
import type { IconProps } from '../../types';

export const ListTimeline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,9H9.02l-3,3,3,3h12.98c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-3-3c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2H9.02l-3,3,3,3h9.98Zm-2,12h-7.98l-3,3,3,3h7.98c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-13,3c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm0-9c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm0-9c0,1.1-.9,2-2,2S0,4.1,0,3,.9,1,2,1s2,.9,2,2Z"/></svg>
);

ListTimeline.displayName = 'ListTimeline';
