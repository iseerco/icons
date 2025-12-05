import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSensorAlert: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3.5V20l-3-5.541V3.5c0-.276-.225-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21h3.464l-1.75,3H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5ZM8,6.5c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm5,0c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm2.5,2.5l8.5,14.985H7.038L15.5,9Zm1.5,11h-3v2h3v-2Zm0-6h-3v4h3v-4Z"/></svg>
);

FiBsSensorAlert.displayName = 'FiBsSensorAlert';
