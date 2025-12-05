import React from 'react';
import type { IconProps } from '../../types';

export const TugrikSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,2v6.89l7-2.33v2.11l-7,2.33v2.33l7-2.33v2.11l-7,2.33v8.56h-2v-7.89l-7,2.33v-2.11l7-2.33v-2.33l-7,2.33v-2.11l7-2.33V2H2V0H22V2H13Z"/></svg>
);

TugrikSign.displayName = 'TugrikSign';
