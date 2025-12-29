import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPersonSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm8,15.5h-2v6h-3v-6h-1v6h-3v-6h-2V9.5c0-1.93,1.57-3.5,3.5-3.5h4c1.93,0,3.5,1.57,3.5,3.5v8.5Zm-8-3h5v-5.5c0-.276-.225-.5-.5-.5h-4c-.275,0-.5,.224-.5,.5v5.5Z"/></svg>
);

FiBsPersonSimple.displayName = 'FiBsPersonSimple';
