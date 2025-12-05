import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTerminal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.85,1.92L10.94,12,.85,22.08l-.71-.71L9.52,12,.15,2.62l.71-.71ZM11,21v1h13v-1H11Z"/></svg>
);

FiTsTerminal.displayName = 'FiTsTerminal';
