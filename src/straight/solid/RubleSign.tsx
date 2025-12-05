import React from 'react';
import type { IconProps } from '../../types';

export const RubleSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.5,0H5V13H2v2h3v2H2v2h3v5h2v-5h9v-2H7v-2h7.5ZM7,2h7.5c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H7V2Z"/></svg>
);

RubleSign.displayName = 'RubleSign';
