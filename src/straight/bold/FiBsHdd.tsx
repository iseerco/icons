import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHdd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,0H4.5C2.57,0,1,1.57,1,3.5V24H23V3.5c0-1.93-1.57-3.5-3.5-3.5Zm-5,22c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm4,0c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm1.5-5H4V3.5c0-.28,.22-.5,.5-.5h15c.28,0,.5,.22,.5,.5v13.5Z"/></svg>
);

FiBsHdd.displayName = 'FiBsHdd';
