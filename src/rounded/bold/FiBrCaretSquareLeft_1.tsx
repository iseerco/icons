import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCaretSquareLeft_1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,18.5V5.5A5.506,5.506,0,0,1,5.5,0h13A5.506,5.506,0,0,1,24,5.5v13A5.506,5.506,0,0,1,18.5,24H5.5A5.506,5.506,0,0,1,0,18.5Zm21-13A2.5,2.5,0,0,0,18.5,3H5.5A2.5,2.5,0,0,0,3,5.5v13A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5Zm-7.6.769L8.25,11.356a.9.9,0,0,0,0,1.288L13.4,17.731a.924.924,0,0,0,1.575-.644V6.913A.924.924,0,0,0,13.4,6.269Z"/></svg>
);

FiBrCaretSquareLeft_1.displayName = 'FiBrCaretSquareLeft_1';
