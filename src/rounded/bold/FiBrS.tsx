import React from 'react';
import type { IconProps } from '../../types';

export const FiBrS: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.904,24h-7.809c-3.361,0-6.096-2.734-6.096-6.096v-.404c.034-1.972,2.966-1.971,3,0v.404c0,1.707,1.389,3.096,3.096,3.096h7.809c3.547-.012,4.252-5.079,.855-6.07l-10.35-2.977C-.292,9.938,1.088,.077,8.096,0h7.809c3.361,0,6.096,2.734,6.096,6.096v.404c-.034,1.972-2.966,1.971-3,0v-.404c0-1.707-1.389-3.096-3.096-3.096h-7.809c-3.547,.012-4.252,5.079-.855,6.07l10.35,2.977c6.702,2.015,5.322,11.876-1.686,11.953Z"/></svg>
);

FiBrS.displayName = 'FiBrS';
