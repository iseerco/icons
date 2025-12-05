import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPencil: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.824,1.176a4.108,4.108,0,0,0-5.676,0L0,18.324V24H5.676L22.824,6.852A4.018,4.018,0,0,0,22.824,1.176ZM4.434,21H3V19.566L15.653,6.914l1.434,1.433Z"/></svg>
);

FiBsPencil.displayName = 'FiBsPencil';
