import React from 'react';
import type { IconProps } from '../../types';

export const FiTsMoneyBillSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,4H2.5c-1.38,0-2.5,1.12-2.5,2.5v13.5H24V6.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,15H1V6.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v12.5ZM12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,7c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Z"/></svg>
);

FiTsMoneyBillSimple.displayName = 'FiTsMoneyBillSimple';
