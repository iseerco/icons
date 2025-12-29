import React from 'react';
import type { IconProps } from '../../types';

export const FiTsDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24h0c-.69,0-1.35-.27-1.83-.76h0S.33,13,.33,13H7V0h10V13h6.67l-9.83,10.23c-.5,.5-1.15,.77-1.84,.77Zm-1.12-1.47c.3,.3,.7,.46,1.12,.47h0c.43,0,.83-.17,1.13-.47l8.2-8.53h-5.33V1H8V14H2.67l8.2,8.53Z"/></svg>
);

FiTsDown.displayName = 'FiTsDown';
