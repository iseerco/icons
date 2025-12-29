import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCaretSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm21,0a9,9,0,1,0-9,9A9.011,9.011,0,0,0,21,12ZM12.4,6.269,7.25,11.356a.9.9,0,0,0,0,1.288L12.4,17.731a.924.924,0,0,0,1.575-.644V6.913A.924.924,0,0,0,12.4,6.269Z"/></svg>
);

FiBrCaretSquareLeft.displayName = 'FiBrCaretSquareLeft';
