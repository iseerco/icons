import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCaretSquareRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,5.5v13A5.506,5.506,0,0,1,18.5,24H5.5A5.506,5.506,0,0,1,0,18.5V5.5A5.506,5.506,0,0,1,5.5,0h13A5.506,5.506,0,0,1,24,5.5ZM3,18.5A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5V5.5A2.5,2.5,0,0,0,18.5,3H5.5A2.5,2.5,0,0,0,3,5.5Zm7.6-.769,5.154-5.087a.9.9,0,0,0,0-1.288L10.6,6.269a.924.924,0,0,0-1.575.644V17.087A.924.924,0,0,0,10.6,17.731Z"/></svg>
);

FiBrCaretSquareRight.displayName = 'FiBrCaretSquareRight';
