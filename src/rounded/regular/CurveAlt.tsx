import React from 'react';
import type { IconProps } from '../../types';

export const CurveAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m1,24c-.552,0-1-.447-1-1s.448-1,1-1c5.075,0,9.377-4.346,10.006-10.108C11.746,5.112,16.902,0,23,0c.552,0,1,.447,1,1s-.448,1-1,1c-5.075,0-9.377,4.346-10.006,10.108-.74,6.779-5.896,11.892-11.994,11.892Z"/>
</svg>
);

CurveAlt.displayName = 'CurveAlt';
