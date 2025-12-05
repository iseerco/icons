import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCoffin: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.459,1.606c-.368-.96-1.307-1.606-2.335-1.606H7.876c-1.028,0-1.967.646-2.335,1.606l-2.56,6.69,3.107,15.703h11.822l3.107-15.703-2.56-6.691Zm-1.37,21.394H6.911l-2.893-14.615L6.475,1.964c.222-.577.784-.964,1.401-.964h8.248c.617,0,1.18.388,1.401.964l2.456,6.421-2.893,14.615Z"/></svg>
);

FiTsCoffin.displayName = 'FiTsCoffin';
