import React from 'react';
import type { IconProps } from '../../types';

export const Calendar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z"/><rect x="15" y="13" width={size} height={size}/><rect x="11" y="13" width={size} height={size}/><rect x="7" y="13" width={size} height={size}/><rect x="15" y="17" width={size} height={size}/><rect x="11" y="17" width={size} height={size}/><rect x="7" y="17" width={size} height={size}/></g></svg>
);

Calendar.displayName = 'Calendar';
