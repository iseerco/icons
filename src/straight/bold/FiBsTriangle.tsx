import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M512,448H0L209.408,86.613c14.954-25.732,47.936-34.47,73.668-19.516c8.089,4.701,14.815,11.427,19.516,19.516L512,448z   M111.253,384h289.493L256,134.187L111.253,384z"/>
</svg>
);

FiBsTriangle.displayName = 'FiBsTriangle';
