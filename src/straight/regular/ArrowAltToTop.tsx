import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3V2H11.77c-.28,.056-.547,.212-.753,.445l-5.017,5.555h5V24h2V8h5L12.983,2.445c-.206-.233-.473-.389-.753-.445h8.77V0Z"/></svg>
);

ArrowAltToTop.displayName = 'ArrowAltToTop';
