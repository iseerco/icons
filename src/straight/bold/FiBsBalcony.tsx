import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBalcony: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M19,10V3.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v6.5H0v10.5c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5V10h-5Zm-8.5,3v8h-2.5V13h2.5Zm3,0h2.5v8h-2.5V13ZM8,3.5c0-.275,.225-.5,.5-.5h7c.275,0,.5,.225,.5,.5v6.5H8V3.5ZM3,20.5v-7.5h2v8h-1.5c-.275,0-.5-.225-.5-.5Zm18,0c0,.275-.225,.5-.5,.5h-1.5V13h2v7.5Z"/>
</svg>
);

FiBsBalcony.displayName = 'FiBsBalcony';
