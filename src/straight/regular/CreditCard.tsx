import React from 'react';
import type { IconProps } from '../../types';

export const CreditCard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><circle cx="5.5" cy="15.5" r="1.5"/><path d="M21,3H3A3,3,0,0,0,0,6V21H24V6A3,3,0,0,0,21,3ZM3,5H21a1,1,0,0,1,1,1V8H2V6A1,1,0,0,1,3,5ZM2,19V10H22v9Z"/></g></svg>
);

CreditCard.displayName = 'CreditCard';
