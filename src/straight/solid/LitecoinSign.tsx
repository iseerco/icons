import React from 'react';
import type { IconProps } from '../../types';

export const LitecoinSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,22v2H7c-1.65,0-3-1.35-3-3v-7.89L0,14.44v-2.11l4-1.33V0h2V10.33l10-3.33v2.11l-10,3.33v8.56c0,.55,.45,1,1,1h15Z"/></svg>
);

LitecoinSign.displayName = 'LitecoinSign';
