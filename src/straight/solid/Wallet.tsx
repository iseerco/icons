import React from 'react';
import type { IconProps } from '../../types';

export const Wallet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,4H24V2H3C1.346,2,0,3.346,0,5v14c0,1.654,1.346,3,3,3H24V6H3c-.552,0-1-.449-1-1s.448-1,1-1ZM20,13c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Z"/></svg>
);

Wallet.displayName = 'Wallet';
