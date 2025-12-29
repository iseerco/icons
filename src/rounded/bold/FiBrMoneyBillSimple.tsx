import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMoneyBillSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,4H5.5C2.47,4,0,6.47,0,9.5v5c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5v-5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,10.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5v-5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v5Zm-6-2.5c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Z"/></svg>
);

FiBrMoneyBillSimple.displayName = 'FiBrMoneyBillSimple';
