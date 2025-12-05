import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCurveAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m1.5,24c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5c4.566,0,8.439-3.939,9.009-9.163C11.245,5.089,16.4,0,22.5,0c.829,0,1.5.672,1.5,1.5s-.671,1.5-1.5,1.5c-4.566,0-8.439,3.939-9.009,9.163-.736,6.748-5.892,11.837-11.991,11.837Z"/>
</svg>
);

FiBrCurveAlt.displayName = 'FiBrCurveAlt';
