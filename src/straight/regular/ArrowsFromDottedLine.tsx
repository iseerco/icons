import React from 'react';
import type { IconProps } from '../../types';

export const ArrowsFromDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,12c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4,0c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm2,9v-6h-2v6l-2.5-2.5-1.414,1.414,3.5,3.5c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l3.5-3.5-1.414-1.414-2.5,2.5Zm9-10c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-20,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm16,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-3,1c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1ZM10.586,.586l-3.5,3.5,1.414,1.414,2.5-2.5v6h2V3l2.5,2.5,1.414-1.414L13.414,.586c-.779-.78-2.049-.78-2.828,0Z"/></svg>
);

ArrowsFromDottedLine.displayName = 'ArrowsFromDottedLine';
