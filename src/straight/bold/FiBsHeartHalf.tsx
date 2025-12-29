import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHeartHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,23.91l-2.42-1.51C7.26,19.76,0,14.45,0,8.51-.08,6.47,.65,4.47,2.01,3.06,3.29,1.73,5.06,1,7.01,1c2.46,.05,4.69,1.39,5.89,3.49,.25,.38,1.1,1.83,1.1,4v15.41ZM6.98,4c-1.11,0-2.09,.4-2.81,1.14-.79,.82-1.22,2.03-1.17,3.31,0,2.89,2.95,6.53,8,10V8.5c0-1.45-.69-2.49-.69-2.49-.67-1.21-1.94-1.98-3.33-2.01Z"/></svg>
);

FiBsHeartHalf.displayName = 'FiBsHeartHalf';
