import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSortAmountUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,20H11.5c-.829,0-1.5,.672-1.5,1.5s.671,1.5,1.5,1.5h11c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/><path d="M10,15.5c0,.828,.671,1.5,1.5,1.5h7c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5h-7c-.829,0-1.5,.672-1.5,1.5Z"/><path d="M11.5,11h3c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5h-3c-.829,0-1.5,.672-1.5,1.5s.671,1.5,1.5,1.5Z"/><path d="M9.752,3.879L6.166,.293c-.391-.391-1.024-.391-1.414,0L1.166,3.879c-.39,.391-.39,1.024,0,1.414,.187,.187,.442,.293,.707,.293h2.127V24.729c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5V5.586h2.045c.552,0,1-.448,1-1,0-.265-.105-.519-.293-.707Z"/></svg>
);

FiBrSortAmountUp.displayName = 'FiBrSortAmountUp';
