import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInboxes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,14.5c0,.83-.67,1.5-1.5,1.5h-5c-.83,0-1.5-.67-1.5-1.5v-1.5H0v7.5c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5v-7.5h-8v1.5Zm2.74,1.5h2.26v4.5c0,.28-.22,.5-.5,.5H3.5c-.28,0-.5-.22-.5-.5v-4.5h2.26c.62,1.75,2.29,3,4.24,3h5c1.96,0,3.62-1.25,4.24-3ZM16,0V1.5c0,.83-.67,1.5-1.5,1.5h-5c-.83,0-1.5-.67-1.5-1.5V0H0V7.5c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5V0h-8Zm5,7.5c0,.28-.22,.5-.5,.5H3.5c-.28,0-.5-.22-.5-.5V3h2.26c.62,1.75,2.29,3,4.24,3h5c1.96,0,3.62-1.25,4.24-3h2.26V7.5Z"/></svg>
);

FiBsInboxes.displayName = 'FiBsInboxes';
