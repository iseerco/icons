import React from 'react';
import type { IconProps } from '../../types';

export const Exchange: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,18H3l2.6,2.6L4.183,22.011l-3.6-3.6a2,2,0,0,1,0-2.828l3.569-3.569,1.414,1.414L3,16H24Zm-5.574-7.427,1.414,1.414,3.574-3.573a2,2,0,0,0,0-2.828L19.821,1.993,18.407,3.407,21,6H0V8H21Z"/></svg>
);

Exchange.displayName = 'Exchange';
