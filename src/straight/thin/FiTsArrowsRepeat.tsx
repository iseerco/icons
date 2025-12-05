import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowsRepeat: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1,12H0c0-3.859,3.14-7,7-7h15.777l-3.766-3.766,.707-.707,3.792,3.792c.651,.651,.651,1.71,0,2.361l-3.792,3.792-.707-.707,3.766-3.766H7c-3.309,0-6,2.691-6,6Zm22,0c0,3.309-2.691,6-6,6H1.223l3.766-3.766-.707-.707L.489,17.319c-.651,.651-.651,1.71,0,2.361l3.792,3.792,.707-.707-3.766-3.766h15.777c3.86,0,7-3.141,7-7h-1Z"/></svg>
);

FiTsArrowsRepeat.displayName = 'FiTsArrowsRepeat';
