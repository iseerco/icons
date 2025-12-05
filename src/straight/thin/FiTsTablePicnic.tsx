import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTablePicnic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12h-3.809l-3.386-8h4.194v-1H3v1H7.194L3.809,12H0v1H3.386L0,21H1.086l3.386-8h15.057l3.386,8h1.086l-3.386-8h3.386v-1Zm-19.105,0l3.386-8h7.439l3.386,8H4.895Z"/></svg>
);

FiTsTablePicnic.displayName = 'FiTsTablePicnic';
