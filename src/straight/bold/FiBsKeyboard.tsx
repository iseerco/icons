import React from 'react';
import type { IconProps } from '../../types';

export const FiBsKeyboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3H13.5V0h-3V3H3A3,3,0,0,0,0,6V21H24V6A3,3,0,0,0,21,3Zm0,15H3V6H21Z"/><rect x="5" y="8" width={size} height={size}/><rect x="10" y="8" width={size} height={size}/><rect x="15" y="8" width={size} height={size}/><rect x="5" y="13" width={size} height={size}/><rect x="15" y="13" width={size} height={size}/></svg>
);

FiBsKeyboard.displayName = 'FiBsKeyboard';
