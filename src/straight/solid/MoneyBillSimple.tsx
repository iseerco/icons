import React from 'react';
import type { IconProps } from '../../types';

export const MoneyBillSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,12c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm10-5v13H0V7c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3Zm-8,5c0-2.21-1.79-4-4-4s-4,1.79-4,4,1.79,4,4,4,4-1.79,4-4Z"/></svg>
);

MoneyBillSimple.displayName = 'MoneyBillSimple';
