import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowsAltV: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,6h4.659L13.076,.445c-.532-.593-1.461-.593-1.993,0L6,6h4.5v12H6l5.083,5.555c.532,.593,1.461,.593,1.993,0l5.083-5.555h-4.659V6Z"/></svg>
);

FiBsArrowsAltV.displayName = 'FiBsArrowsAltV';
