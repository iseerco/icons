import React from 'react';
import type { IconProps } from '../../types';

export const BangladeshiTakaSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,11v3c0,5.51-4.49,10-10,10h-3c-1.65,0-3-1.35-3-3V10H2v-2H6V3c0-.55-.45-1-1-1H2V0h3c1.65,0,3,1.35,3,3v5h4v2h-4v11c0,.55,.45,1,1,1h3c4.41,0,8-3.59,8-8v-3c0-.55-.45-1-1-1h-3v-2h3c1.65,0,3,1.35,3,3Z"/></svg>
);

BangladeshiTakaSign.displayName = 'BangladeshiTakaSign';
